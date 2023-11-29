import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FilePdf } from '@phosphor-icons/react/dist/ssr';

import ExternalLink from '~/components/external-link';

import OpenSourceTab from './tabs/open-source';
import ProfessionalTab from './tabs/professional';

import DeveloperSetup from '~/images/developer-setup.webp';
import { TabButton, TabProvider } from './tab';

const Work = () => {
  return (
    <div className="pt-8">
      <div className="w-constraint">
        <header className="flex-1">
          <h1 className="text-4xl font-bold">My Work</h1>
          <p className="text-lg text-gray-700 mt-6 font-normal">
            Here&apos;s a little bit about the work I have done so far.
          </p>
        </header>
        <main>
          <TabProvider defaultTabId="professional">
            <nav className="flex py-2 mt-4 space-x-2 overflow-x-auto whitespace-nowrap w-full">
              <TabButton tabId="professional">Professional</TabButton>
              <TabButton tabId="open-source">Open Source</TabButton>
            </nav>
            <>
              <ProfessionalTab tabId="professional" />
              <OpenSourceTab tabId="open-source" />
            </>
          </TabProvider>
          <div className="flex justify-between items-center sm:items-start mb-8 py-8 flex-col sm:space-x-6 sm:flex-row border-t">
            <Image
              alt="Developer setup"
              src={DeveloperSetup}
              className="w-full sm:max-w-[240px]"
            />
            <div className="text-lg text-slate-700 flex-1 mt-4 sm:mt-0">
              <h2 className="text-2xl font-bold">Relevant Information</h2>
              <p className="mt-6">
                Sometimes I write blog posts about some interesting development
                experience, which you might find insightful. You can check them
                out on my{' '}
                <Link className="underline text-red-400" href="/blog">
                  blog
                </Link>
                !
              </p>
              <p className="mt-4">
                I am open to chat if you have any nice ideas for collaboration.
                I would love working on open-source projects and exciting but
                feasible startup ideas. You can{' '}
                <Link className="underline text-red-400" href="/contact">
                  contact me here
                </Link>
                .
              </p>
              <p className="mt-4">
                <strong>TLDR;</strong> You can check out my latest{' '}
                <ExternalLink
                  className="inline-flex items-center text-red-400 underline"
                  href="https://drive.google.com/drive/folders/12V0HB9yLcDc6j2QDzSzVUefYCIq_vHXa?usp=sharing"
                >
                  Resume <FilePdf className="ml-2 inline-block" weight="bold" />
                </ExternalLink>
                .
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Work;
