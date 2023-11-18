import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

import ExternalLink from '~/components/external-link';
import {
  Envelope,
  TelegramLogo,
  TwitterLogo,
} from '@phosphor-icons/react/dist/ssr';
import ContactForm from '~/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact | Siddharth Borderwala',
  description:
    'I am Siddharth Borderwala, a full-stack developer specializing in front-end development. Contact me from here and I will get back to you in a day!',
};

const ContactPage = () => {
  return (
    <div style={{ backgroundImage: 'url(/dot-grid.png)' }} className="pt-8">
      <main className="w-constraint pb-16">
        <h1 className="text-4xl font-bold">Contact Me</h1>
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-8">
          <div className="flex-1">
            <h2 className="text-xl mt-8 text-gray-700">
              Want to connect? I am active on the following channels
            </h2>
            <ul className="text-lg text-gray-700 mt-8 space-y-6">
              <li className="font-bold flex items-center space-x-4">
                <span className="bg-gray-100 p-2 w-10 sm:p-4 sm:w-16 rounded-full inline-flex items-center justify-center">
                  <Envelope size="100%" />
                </span>
                <div>
                  <p className="uppercase tracking-wider text-gray-400 font-bold text-xs sm:text-sm">
                    E-Mail
                  </p>
                  <ExternalLink
                    href="mailto:siddharthborderwala@gmail.com"
                    className="text-sm sm:text-base"
                  >
                    siddharthborderwala@gmail.com
                  </ExternalLink>
                </div>
              </li>
              <li className="font-bold flex items-center space-x-4">
                <span className="bg-gray-100 p-2 w-10 sm:p-4 sm:w-16 rounded-full inline-flex items-center justify-center">
                  <TwitterLogo size="100%" />
                </span>
                <div>
                  <p className="uppercase tracking-wider text-gray-400 font-bold text-xs sm:text-sm">
                    Twitter
                  </p>
                  <ExternalLink
                    href="https://twitter.com/sidborderwala"
                    className="text-sm sm:text-base"
                  >
                    @sidborderwala
                  </ExternalLink>
                </div>
              </li>
              <li className="font-bold flex items-center space-x-4">
                <span className="bg-gray-100 p-2 w-10 sm:p-4 sm:w-16 rounded-full inline-flex items-center justify-center">
                  <TelegramLogo size="100%" />
                </span>
                <div>
                  <p className="uppercase tracking-wider text-gray-400 font-bold text-xs sm:text-sm">
                    Telegram
                  </p>
                  <ExternalLink
                    href="https://t.me/siddharthborderwala"
                    className="text-sm sm:text-base"
                  >
                    @siddharthborderwala
                  </ExternalLink>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
        <hr className="mt-16" />
        <p className="text-xl text-gray-700 mt-16">
          Find out more about the the work I do{' '}
          <Link href="/#work" className="underline text-red-400">
            here
          </Link>
          .
        </p>
      </main>
    </div>
  );
};

export default ContactPage;
