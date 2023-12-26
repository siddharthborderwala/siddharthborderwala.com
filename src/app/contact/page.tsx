import React from 'react';
import type { Metadata } from 'next';

import ExternalLink from '~/components/external-link';
import {
  Envelope,
  TelegramLogo,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr';
import ContactForm from '~/components/contact-form';
import FadeInSection from '~/components/fade-in-section';

export const metadata: Metadata = {
  title: 'Contact | Siddharth Borderwala',
  description: 'Reach out to me via twitter, email or telegram.',
  openGraph: {
    title: 'Contact | Siddharth Borderwala',
    description: 'Reach out to me via twitter, email or telegram.',
    url: 'https://siddharthborderwala.com',
    type: 'website',
    images: [
      {
        url: 'https://siddharthborderwala.com/social-contact.png',
        width: 1900,
        height: 1000,
        alt: 'Siddharth Borderwala',
      },
    ],
  },
  twitter: {
    site: 'siddharthborderwala',
    card: 'summary_large_image',
    title: 'Contact | Siddharth Borderwala',
    description: 'Reach out to me via twitter, email or telegram.',
    images: [
      {
        url: 'https://siddharthborderwala.com/social-contact.png',
        width: 1900,
        height: 1000,
        alt: 'Siddharth Borderwala',
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <div className="pt-8">
      <main className="w-constraint pb-16">
        <FadeInSection>
          <h1 className="text-4xl font-bold">Contact Me</h1>
        </FadeInSection>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-8">
          <div className="flex-1">
            <FadeInSection delay={0.1}>
              <h2 className="text-xl font-sans font-light mt-8 text-gray-600">
                Want to connect? I am active on the following channels
              </h2>
            </FadeInSection>
            <ul className="text-lg text-gray-700 mt-8 space-y-6">
              <li>
                <FadeInSection
                  delay={0.4}
                  className="font-bold flex items-center space-x-4"
                >
                  <span className="flex-shrink-0 bg-gray-100 p-2 w-10 sm:p-4 sm:w-16 rounded-full inline-flex items-center justify-center">
                    <Envelope size="100%" />
                  </span>
                  <div>
                    <p className="uppercase tracking-wider text-gray-400 font-bold text-xs sm:text-sm">
                      E-Mail
                    </p>
                    <ExternalLink
                      href="mailto:siddharthborderwala@gmail.com"
                      className="text-sm sm:text-base break-words"
                    >
                      siddharthborderwala@gmail.com
                    </ExternalLink>
                  </div>
                </FadeInSection>
              </li>
              <li>
                <FadeInSection
                  delay={0.5}
                  className="font-bold flex items-center space-x-4"
                >
                  <span className="flex-shrink-0 bg-gray-100 p-2 w-10 sm:p-4 sm:w-16 rounded-full inline-flex items-center justify-center">
                    <TwitterLogo size="100%" />
                  </span>
                  <div>
                    <p className="uppercase tracking-wider text-gray-400 font-bold text-xs sm:text-sm">
                      Twitter
                    </p>
                    <ExternalLink
                      href="https://twitter.com/sidborderwala"
                      className="text-sm sm:text-base break-words"
                    >
                      @sidborderwala
                    </ExternalLink>
                  </div>
                </FadeInSection>
              </li>
              <li>
                <FadeInSection
                  delay={0.6}
                  className="font-bold flex items-center space-x-4"
                >
                  <span className="flex-shrink-0 bg-gray-100 p-2 w-10 sm:p-4 sm:w-16 rounded-full inline-flex items-center justify-center">
                    <TelegramLogo size="100%" />
                  </span>
                  <div>
                    <p className="uppercase tracking-wider text-gray-400 font-bold text-xs sm:text-sm">
                      Telegram
                    </p>
                    <ExternalLink
                      href="https://t.me/siddharthborderwala"
                      className="text-sm sm:text-base break-words"
                    >
                      @siddharthborderwala
                    </ExternalLink>
                  </div>
                </FadeInSection>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
