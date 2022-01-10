import axios from 'axios';

const handler = async (req, res) => {
  switch (req.method.toLowerCase()) {
    case 'post': {
      // validate the request and the input values
      const { name, email, message } = req.body;

      if (!name) {
        res.status(400).send('`name` field required');
        return;
      }
      if (typeof name !== 'string') {
        res.status(400).send('`name` field must be a string');
        return;
      }
      if (name.trim().length === 0) {
        res.status(400).send('`name` field must not be empty');
        return;
      }
      if (!email) {
        res.status(400).send('`email` field required');
        return;
      }
      if (typeof email !== 'string') {
        res.status(400).send('`email` field must be a string');
        return;
      }
      if (email.trim().length === 0) {
        res.status(400).send('`email` field must not be empty');
        return;
      }
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        res.status(400).send('`email` field invalid');
        return;
      }
      if (!message) {
        res.status(400).send('`message` field required');
        return;
      }
      if (typeof message !== 'string') {
        res.status(400).send('`message` field must be a string');
        return;
      }
      if (message.trim().length === 0) {
        res.status(400).send('`message` field must not be empty');
        return;
      }

      try {
        // make a post request to notion api
        const response = await axios.post(
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

        res.status(200).send('OK');
      } catch (error) {
        if (error.response && error.response.status === 400) {
          res.status(400).send('Bad request');
        } else {
          res.status(500).send('Internal Server Error');
        }
      } finally {
        return;
      }
    }
    case 'options': {
      res.set('Allow', 'POST, OPTIONS');
      res.status(204).send();
      return;
    }
    default: {
      res.status(405).send(`${req.method} not allowed`);
      return;
    }
  }
};

export default handler;
