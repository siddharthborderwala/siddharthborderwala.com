import * as React from 'react';
import { Link } from 'gatsby';

import StandardLayout from '../layouts/standard';
import { Meta } from '../components/seo';

const siteTitle = 'Siddharth Borderwala | Not Found';
const description =
  "Checkout Siddharth Borderwala's profile and get to know more about him.";
const imgSrc = 'https://www.codexsid.com/social.png';

const NotFoundPage = () => {
  return (
    <StandardLayout>
      <Meta title={siteTitle} description={description} image={imgSrc} />
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
          we couldn’t find what you were looking for.
          <br />
        </p>
        <h2 className="mt-4 text-2xl">
          <Link to="/" className="link mt-4 font-semibold">
            Go home 🏠
          </Link>
        </h2>
      </main>
    </StandardLayout>
  );
};

export default NotFoundPage;
