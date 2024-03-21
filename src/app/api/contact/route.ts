import zod from 'zod';
import stripIndent from 'strip-indent';
import { json } from '~/utils/server';
import { Resend } from 'resend';
import { EmailTemplate } from '~/email-templates/contact';

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
  const resend = new Resend(process.env.RESEND_API_KEY);

  return resend.emails.send({
    from: 'Website Contact <contact@tweetr.siddharthborderwala.com>',
    to: 'Siddharth Borderwala <siddharthborderwala@gmail.com>',
    subject: 'Website Contact Form Submission',
    text: stripIndent(`
      Message from ${name}
      ${email}
      ${message}
    `),
    react: EmailTemplate({
      email,
      message,
      name,
    }),
    reply_to: email,
  });
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
      if (emailResponse.error) {
        return json(
          {
            message: emailResponse.error.message,
          },
          500
        );
      } else {
        return json(null, 200);
      }
    }
  } catch (error) {
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
