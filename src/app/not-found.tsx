import * as React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

const siteTitle = 'Siddharth Borderwala | Not Found';
const description =
  "Checkout Siddharth Borderwala's profile and get to know more about him.";

export const metadata: Metadata = {
  title: siteTitle,
  description,
  openGraph: {
    images: 'https://www.codexsid.com/social.png',
  },
};

const NotFoundPage = () => {
  return (
    <main
      className="w-constraint py-8"
      style={{ minHeight: 'calc(100vh - 23rem)' }}
    >
      <h1 className="text-4xl font-bold mt-8">Page not found 💥</h1>
      <p className="mt-8">
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn&apos;t find what you were looking for.
        <br />
      </p>
      <h2 className="mt-4 text-2xl">
        <Link href="/" className="link mt-4 font-semibold">
          Go home 🏠
        </Link>
      </h2>
    </main>
  );
};

export default NotFoundPage;
