declare namespace NodeJS {
  interface ProcessEnv {
    // server side only
    NOTION_SECRET: string;
    MAILGUN_API_KEY: string;
    MAILGUN_SENDER_DOMAIN: string;

    // client side only
    NEXT_PUBLIC_ORIGIN: string;
  }
}
