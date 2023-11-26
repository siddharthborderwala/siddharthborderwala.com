import axios from 'axios';
import zod from 'zod';
import FormData from 'form-data';
import Mailgun from 'mailgun.js';
import stripIndent from 'strip-indent';
import { json } from '~/utils/server';

const contactFormValidator = zod.object({
  name: zod
    .string({
      required_error: 'Name is required',
      invalid_type_error: 'Invalid name',
    })
    .min(3, {
      message: 'Name must be at least 3 characters long',
    })
    .max(50, {
      message: 'Name must be less than 50 characters long',
    }),
  email: zod
    .string({
      required_error: 'Email is required',
      invalid_type_error: 'Invalid email',
    })
    .email({
      message: 'Invalid email',
    }),
  message: zod
    .string({
      required_error: 'Message is required',
      invalid_type_error: 'Invalid message',
    })
    .min(3, {
      message: 'Message must be at least 3 characters long',
    })
    .max(500, {
      message: 'Message must be less than 500 characters long',
    }),
});

const sendContactFormEmail = async (
  name: string,
  email: string,
  message: string
) => {
  const mailgun = new Mailgun(FormData);
  const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
  });
  return mg.messages.create(process.env.MAILGUN_SENDER_DOMAIN, {
    'h:Reply-To': email,
    from: `Website Contact Form <noreply@${process.env.MAILGUN_SENDER_DOMAIN}>`,
    to: 'Siddharth Borderwala <siddharthborderwala@gmail.com>',
    subject: 'Website Contact Form Submission',
    text: stripIndent(`
      Name: ${name}
      Email: ${email}

      Message:
      ${message}
    `),
    html: stripIndent(`
      <p>
        <strong>Name:</strong> ${name}
      </p>
      <p>
        <strong>Email:</strong> ${email}
      </p>
      <p>
        <strong>Message:</strong>
      </p>
      <p>${message}</p>
    `),
  });
};

const submitContactFormNotion = (
  name: string,
  email: string,
  message: string
) => {
  return axios.post(
    'https://api.notion.com/v1/pages',
    {
      parent: {
        database_id: process.env.NOTION_DB,
      },
      properties: {
        name: [
          {
            text: {
              content: name,
            },
          },
        ],
        email: email,
        date: {
          start: new Date().toISOString(),
          end: null,
        },
      },
      children: [
        {
          object: 'block',
          type: 'paragraph',
          paragraph: {
            text: [
              {
                type: 'text',
                text: {
                  content: message,
                },
              },
            ],
          },
        },
      ],
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.NOTION_SECRET}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2021-08-16',
      },
    }
  );
};

export const POST = async (req: Request) => {
  const data = await req.json();

  try {
    const parseResult = contactFormValidator.safeParse(data);
    if (parseResult.success === false) {
      const errors = parseResult.error.flatten();
      return json(errors, 400);
    } else {
      const emailResponse = await sendContactFormEmail(
        parseResult.data.name,
        parseResult.data.email,
        parseResult.data.message
      );
      return json(
        {
          message: emailResponse.message,
          status: emailResponse.status,
        },
        200
      );
    }
  } catch (error) {
    console.log(error);

    return new Response('Internal Server Error', { status: 500 });
  }
};

export const OPTIONS = async (req: Request) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  const origin = req.headers.get('origin');
  if (origin) {
    headers['Access-Control-Allow-Origin'] = origin;
  }
  return new Response(null, { headers });
};
