declare namespace NodeJS {
  interface ProcessEnv {
    // server side only
    MAILGUN_API_KEY: string;
    MAILGUN_SENDER_DOMAIN: string;
    CF_TURNSTILE_SECRET_KEY: string;

    // client side only
    NEXT_PUBLIC_ORIGIN: string;
    NEXT_PUBLIC_CF_TURNSTILE_SITE_KEY: string;
  }
}
