import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import OpenSourceTab from './tabs/open-source';
import ProfessionalTab from './tabs/professional';

import FadeInSection from '~/components/fade-in-section';

const Work = () => {
  return (
    <div className="pt-8">
      <div className="w-constraint">
        <header className="flex-1">
          <FadeInSection>
            <h1 className="text-4xl font-bold">My Work</h1>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <p className="text-lg text-gray-700 mt-6 font-normal">
              Here&apos;s a little bit about the work I have done so far.
            </p>
          </FadeInSection>
        </header>
        <main>
          <ProfessionalTab />
          <OpenSourceTab />
        </main>
      </div>
    </div>
  );
};

export default Work;
