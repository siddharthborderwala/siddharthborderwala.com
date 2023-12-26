import React from 'react';

import ProfessionalTab from './tabs/professional';

import FadeInSection from '~/components/fade-in-section';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Siddharth Borderwala',
  description:
    'Find out about the work I have done so far and what I am interested in.',
  openGraph: {
    title: 'Work | Siddharth Borderwala',
    description:
      'Find out about the work I have done so far and what I am interested in.',
    url: 'https://siddharthborderwala.com',
    type: 'website',
    images: [
      {
        url: 'https://siddharthborderwala.com/social-work.png',
        width: 1900,
        height: 1000,
        alt: 'Siddharth Borderwala',
      },
    ],
  },
  twitter: {
    site: 'siddharthborderwala',
    card: 'summary_large_image',
    title: 'Work | Siddharth Borderwala',
    description:
      'Find out about the work I have done so far and what I am interested in.',
    images: [
      {
        url: 'https://siddharthborderwala.com/social-work.png',
        width: 1900,
        height: 1000,
        alt: 'Siddharth Borderwala',
      },
    ],
  },
};

const Work = () => {
  return (
    <div className="pt-8">
      <div className="w-constraint">
        <header className="flex-1">
          <FadeInSection>
            <h1 className="text-4xl font-bold">My Work</h1>
          </FadeInSection>
          <FadeInSection>
            <p className="text-xl text-gray-900 mt-6 font-light">
              I am a computer science graduate with extensive experience in full
              stack development. I have worked in the industry as a professional
              since 2022 and I have been contributing to open source projects
              since 2019.
            </p>
          </FadeInSection>
        </header>
        <main className="mt-12 space-y-12">
          <ProfessionalTab />
        </main>
      </div>
    </div>
  );
};

export default Work;
