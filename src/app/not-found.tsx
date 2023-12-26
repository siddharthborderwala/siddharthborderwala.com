import * as React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Text from '~/components/text';
import { LinkSimple } from '@phosphor-icons/react/dist/ssr';

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
      className="w-constraint py-8 flex flex-col justify-center items-center"
      style={{ height: '70svh' }}
    >
      <h1 className="text-4xl font-bold mt-8 text-center">Page not found</h1>
      <Text className="text-center">
        Sorry! We couldn&apos;t find what you were looking for.
        <br />
      </Text>
      <Link
        href="/"
        className="my-12 text-center border-b-2 text-red-400 border-b-red-400 font-semibold inline-flex gap-2 items-center"
      >
        <LinkSimple weight="bold" /> <span>Home Page</span>
      </Link>
    </main>
  );
};

export default NotFoundPage;
