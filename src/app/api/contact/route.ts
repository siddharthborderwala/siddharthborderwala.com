import axios, { AxiosError } from 'axios';

export const POST = async (req: Request) => {
  const { name, email, message } = await req.json();

  if (!name) {
    return new Response('`name` field required', { status: 400 });
  }
  if (typeof name !== 'string') {
    return new Response('`name` field must be a string', { status: 400 });
  }
  if (name.trim().length === 0) {
    return new Response('`name` field must not be empty', { status: 400 });
  }
  if (!email) {
    return new Response('`email` field required', { status: 400 });
  }
  if (typeof email !== 'string') {
    return new Response('`email` field must be a string', { status: 400 });
  }
  if (email.trim().length === 0) {
    return new Response('`email` field must not be empty', { status: 400 });
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return new Response('`email` field invalid', { status: 400 });
  }
  if (!message) {
    return new Response('`message` field required', { status: 400 });
  }
  if (typeof message !== 'string') {
    return new Response('`message` field must be a string', { status: 400 });
  }
  if (message.trim().length === 0) {
    return new Response('`message` field must not be empty', { status: 400 });
  }

  try {
    // make a post request to notion api
    await axios.post(
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

    return new Response('OK', { status: 200 });
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.response && error.response.status === 400) {
        return new Response('Bad Request', { status: 400 });
      }
      return new Response('Internal Server Error', { status: 500 });
    }
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
