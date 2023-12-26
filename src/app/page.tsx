import Image from 'next/image';
import ExternalLink from '~/components/external-link';
import Text from '~/components/text';
import FadeInSection from '~/components/fade-in-section';
import LinkCTA from '~/components/link-cta';
import Siddharth from '~/images/siddharth-centered.jpg';
import {
  CodeSimple,
  Briefcase,
  ChartLine,
  GlobeSimple,
} from '@phosphor-icons/react/dist/ssr';
import { Metadata } from 'next';

export const metadata: Metadata = {
  openGraph: {
    title: 'Siddharth Borderwala',
    description:
      'I am a Full Stack Developer having fun building things that live on the internet.',
    url: 'https://siddharthborderwala.com',
    type: 'website',
    images: [
      {
        url: 'https://siddharthborderwala.com/social-home.png',
        width: 1900,
        height: 1000,
        alt: 'Siddharth Borderwala',
      },
    ],
  },
  twitter: {
    site: 'siddharthborderwala',
    card: 'summary_large_image',
    title: 'Siddharth Borderwala',
    description:
      'I am a Full Stack Developer having fun building things that live on the internet.',
    images: [
      {
        url: 'https://siddharthborderwala.com/social-home.png',
        width: 1900,
        height: 1000,
        alt: 'Siddharth Borderwala',
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <header className="w-constraint flex gap-8 sm:gap-16 justify-between items-center py-8 sm:py-16 flex-col-reverse md:flex-row md:py-24">
        <div className="flex-[3]">
          <FadeInSection>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-gray-900 !leading-tight">
              Hello 👋🏻 <br /> I am Siddharth
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Text>
              A full stack developer building fast, beautiful and accessible
              website and apps.
            </Text>
          </FadeInSection>
          <div className="flex items-center justify-start gap-2 sm:gap-4">
            <FadeInSection delay={0.2}>
              <LinkCTA href="/contact" label="Contact Me" />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <LinkCTA isSecondary={true} href="/work" label="My Work" />
            </FadeInSection>
          </div>
        </div>
        <FadeInSection className="flex-[2] w-full flex items-center justify-center md:justify-end flex-shrink-0 py-4 sm:py-12 sm:py-auto">
          <Image
            alt="Siddharth Borderwala"
            src={Siddharth}
            className="border-none rounded-full w-56 sm:w-64 lg:w-72 md:mb-auto shadow-red-100/50 hover:shadow-red-200/50 active:shadow-red-200/50"
          />
        </FadeInSection>
      </header>
      <main className="w-constraint pb-20">
        <section id="about" className="my-12 py-12 space-y-16 sm:space-y-24">
          <FadeInSection className="!mb-24">
            <h3 className="text-3xl sm:text-4xl font-medium">About Me</h3>
            <Text>Here&apos; a little bit about me and my work!</Text>
          </FadeInSection>
          <FadeInSection className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center">
            <div className="w-48 h-48 flex-shrink-0 bg-gradient-to-br from-red-400 to-orange-300 rounded-2xl p-4 shadow-2xl shadow-red-100">
              <div className="w-full h-full flex items-center justify-center bg-white rounded-xl shadow-inner">
                <CodeSimple size={32} weight="bold" className="text-red-400" />
              </div>
            </div>
            <Text>
              I am a{' '}
              <span className="emphasis">Full-Stack TypeScript Developer</span>{' '}
              specializing in front-end development. I am proficient with with
              React, Node, GraphQL, SQL and Redis. I also enjoy working with Go
              and Rust for building backend services and CLI tools.
            </Text>
          </FadeInSection>
          <FadeInSection className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-12 items-center">
            <Text>
              I have <span className="emphasis">more than 2 years</span> of
              experience in building web experiences, ranging from simple
              landing pages, complex web applications and chrome extensions. I
              am also experienced in creating and maintaining developer SDKs and
              open source packages.
            </Text>
            <div className="w-48 h-48 flex-shrink-0 bg-gradient-to-br from-red-400 to-orange-300 rounded-2xl p-4 shadow-2xl shadow-red-100">
              <div className="w-full h-full flex items-center justify-center bg-white rounded-xl shadow-inner">
                <Briefcase size={32} weight="bold" className="text-red-400" />
              </div>
            </div>
          </FadeInSection>
          <FadeInSection className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-center">
            <div className="w-48 h-48 flex-shrink-0 bg-gradient-to-br from-red-400 to-orange-300 rounded-2xl p-4 shadow-2xl shadow-red-100">
              <div className="w-full h-full flex items-center justify-center bg-white rounded-xl shadow-inner">
                <ChartLine size={32} weight="bold" className="text-red-400" />
              </div>
            </div>
            <Text>
              I love open source and I am the creator and maintainer of{' '}
              <ExternalLink href="https://github.com/sassy-labs/datepicker">
                sassy-datepicker
              </ExternalLink>{' '}
              - a date picker library for React, which has{' '}
              <span className="emphasis">60K downloads in 2024</span>. I am an
              open-source contributor and have contributed to libraries like{' '}
              <ExternalLink href="https://github.com/validatorjs/validator.js">
                validatorjs
              </ExternalLink>{' '}
              and{' '}
              <ExternalLink href="https://github.com/supabase">
                supabase
              </ExternalLink>
              .
            </Text>
          </FadeInSection>
          <FadeInSection className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-12 items-center">
            <Text>
              I also work with local businesses to{' '}
              <span className="emphasis">design</span>, build and maintain their
              website and web applications. I also provide services like{' '}
              <span className="emphasis">SEO/SMO optimization</span>, technical
              advice, and consultation for building an online presence for
              businesses.
            </Text>
            <div className="w-48 h-48 flex-shrink-0 bg-gradient-to-br from-red-400 to-orange-300 rounded-2xl p-4 shadow-2xl shadow-red-100">
              <div className="w-full h-full flex items-center justify-center bg-white rounded-xl shadow-inner">
                <GlobeSimple size={32} weight="bold" className="text-red-400" />
              </div>
            </div>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <LinkCTA href="/work" label="Know More" />
          </FadeInSection>
        </section>
        <section id="tldr" className="my-12 py-12">
          <FadeInSection>
            <h3 className="text-3xl sm:text-4xl font-medium">TLDR;</h3>
            <Text>Short on time? This is me, bento box style!</Text>
          </FadeInSection>
          <div className="grid gap-4 mt-12 grid-cols-1 grid-rows-6 md:grid-rows-3 md:grid-cols-8 bg-gradient-to-br from-red-400 via-pink-400 to-red-400 p-4 rounded-2xl shadow-2xl">
            <FadeInSection className="w-full col-span-1 md:col-span-5 row-span-1 h-full px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <h4 className="text-center text-lg sm:text-xl font-serif font-thin text-gray-700">
                Full Stack Developer
              </h4>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-3 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Technical Writer
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-4 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Computer Science Graduate
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-4 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Open Source Contributor
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-3 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                Designer
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-2 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                SEO Expert
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-3 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-lg sm:text-xl font-serif font-thin text-gray-600">
                F1 and FIFA Fan
              </p>
            </FadeInSection>
          </div>
        </section>
      </main>
    </>
  );
}
