import React from 'react';

import WorkExperience from './work/work-experience';

import FadeInSection from '~/components/fade-in-section';
import { Metadata } from 'next';
import Text from '~/components/text';
import LinkCTA from '~/components/link-cta';
import Image from 'next/image';
import SiddharthAbout from '~/images/siddharth-about.webp';
import { TechStack } from './tech-stack';
import blurs from '~/images/blurs.json';

export const metadata: Metadata = {
  title: 'About | Siddharth Borderwala',
  description:
    'Know more about me, the work I have done, my tech stack and what I am interested in.',
  openGraph: {
    title: 'About | Siddharth Borderwala',
    description:
      'Know more about me, the work I have done, my tech stack and what I am interested in.',
    url: 'https://siddharthborderwala.com',
    type: 'website',
    images: [
      {
        url: 'https://siddharthborderwala.com/social-about.png',
        width: 1900,
        height: 1000,
        alt: 'Siddharth Borderwala',
      },
    ],
  },
  twitter: {
    site: '@sidborderwala',
    card: 'summary_large_image',
    title: 'About | Siddharth Borderwala',
    description:
      'Know more about me, the work I have done, my tech stack and what I am interested in.',
    images: [
      {
        url: 'https://siddharthborderwala.com/social-about.png',
        width: 1900,
        height: 1000,
        alt: 'Siddharth Borderwala',
      },
    ],
  },
};

const About = () => {
  return (
    <>
      <header className="w-constraint flex gap-8 sm:gap-16 justify-between items-center py-8 sm:py-16 flex-col-reverse md:flex-row md:py-24">
        <div className="flex-[3]">
          <FadeInSection>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-gray-900 !leading-tight">
              About Me
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Text>
              I am a full stack developer with an eye for design, having over 2
              years of experience experience building websites, web applications
              and developer SDKs.
            </Text>
          </FadeInSection>
          <div className="flex items-center justify-start gap-2 sm:gap-4">
            <FadeInSection delay={0.2}>
              <LinkCTA href="#work-experience" label="My Work" />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <LinkCTA
                isSecondary={true}
                href="#tech-stack"
                label="Tech Stack"
              />
            </FadeInSection>
          </div>
        </div>
        <FadeInSection
          delay={0.1}
          className="flex-[2] w-full flex items-center justify-center md:justify-end flex-shrink-0 py-4 sm:py-12 sm:py-auto"
        >
          <Image
            alt="Siddharth Borderwala"
            src={SiddharthAbout}
            blurDataURL={blurs['siddharth-about']}
            className="border-none aspect-square object-cover object-center rounded-full w-56 sm:w-64 lg:w-72 md:mb-auto shadow-red-100/50 hover:shadow-red-200/50 active:shadow-red-200/50"
          />
        </FadeInSection>
      </header>
      <main className="w-constraint relative">
        <WorkExperience />
        <TechStack />
        {/* <Projects /> */}
      </main>
    </>
  );
};

export default About;
