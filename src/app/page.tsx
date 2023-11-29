'use client';

import { CaretRight, ArrowRight } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import { AnimationProps, motion } from 'framer-motion';
import ExternalLink from '~/components/external-link';
import Text from '~/components/text';
import Sid from '~/images/siddharth.webp';
import { useEffect, useRef, useState } from 'react';

const LinkCTA: React.FC<{
  href: string;
  label: string;
}> = ({ href, label }) => {
  return (
    <Link
      href={href}
      className="group bg-red-400 font-serif text-white text-lg py-2 px-4 mt-8 inline-flex items-center rounded-xl transition-all shadow-xl shadow-red-100 hover:shadow-2xl hover:shadow-red-200 active:shadow-lg active:shadow-red-200"
    >
      <span className="mr-3">{label}</span>
      <div className="relative w-4 h-4 mb-[2px]">
        <CaretRight
          className="absolute inset-0 opacity-100 scale-100 group-hover:scale-0 transition-all group-hover:opacity-0 group-hover:translate-x-4"
          weight="bold"
        />
        <ArrowRight
          className="absolute inset-0 opacity-0 scale-0 group-hover:scale-100 transition-all group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0"
          weight="bold"
        />
      </div>
    </Link>
  );
};

const FadeInSection: React.FC<
  React.PropsWithChildren<{
    delay?: number;
    ease?: AnimationProps['transition'];
  }>
> = ({ children, delay = 0, ease = 'easeInOut' }) => {
  const [isVisible, setVisible] = useState(false);
  const checkerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!checkerRef.current) {
      return;
    }

    const element = checkerRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setVisible(true);
      });
    });

    observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  if (!isVisible) {
    return <div ref={checkerRef}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
      transition={{ ease, delay }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <>
      <header className="w-constraint flex justify-between items-center py-8 sm:py-16 flex-col-reverse md:flex-row md:py-24">
        <div>
          <FadeInSection>
            <h1 className="font-serif text-3xl sm:text-5xl font-medium text-gray-900">
              Hi, I am Siddharth
            </h1>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Text>
              I build beautiful, fast, accessible and amazing websites. I am a
              computer science geek and I love programming.
            </Text>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <LinkCTA href="/contact" label="Contact Me" />
          </FadeInSection>
        </div>
        <div className="md:ml-16 rounded-full flex-shrink-0">
          <FadeInSection>
            <Image
              alt="Siddharth Borderwala"
              src={Sid}
              className="border-none rounded-full w-56 md:w-96 mb-16 md:mb-auto overflow-clip"
            />
          </FadeInSection>
        </div>
      </header>
      <main className="w-constraint mt-16 pb-20 sm:pb-32">
        <section id="about" className="pt-8">
          <FadeInSection>
            <h3 className="text-4xl font-medium mb-12">Get to Know Me</h3>
          </FadeInSection>
          {/* TODO: change this to a better visual thingy */}
          <FadeInSection delay={0.1}>
            <Text>
              I am a Full-Stack Developer and Computer Science undergraduate at{' '}
              <ExternalLink href="https://snu.edu.in/home">
                Shiv Nadar University
              </ExternalLink>{' '}
              in Delhi. I specialize in the Javascript/Typescript ecosystem and
              have recently gotten into the web3 world via the NEAR protocol
              ecosystem using the rust language.
            </Text>
            <Text>
              I began writing about my work and some engineering challenges I
              have solved on my{' '}
              <Link href="/blog" className="underline text-red-400">
                blog
              </Link>{' '}
              recently. Give some of them a read and share any feedback or
              suggestions you have.
            </Text>
            <Text>
              Besides coding and writing, I love Formula 1 and Football and
              enjoy watching sitcoms and thrillers. Also, did I mention that I
              am always down to play FIFA and first-person shooters with good
              storylines?
            </Text>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <LinkCTA href="/contact" label="Connect" />
          </FadeInSection>
        </section>
        <section id="work" className="mt-32 pt-8">
          <FadeInSection>
            <h3 className="text-4xl font-medium mb-12">My Work</h3>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Text>
              I am a Full-Stack JavaScript/TypeScript developer specializing in
              Reactjs, Nodejs, and the JAMStack ecosystem. I have worked on
              projects solo and led teams of up to 6 developers to design, build
              and deploy production-grade web applications.
            </Text>
            <Text>
              I am an open-source contributor and have contributed to libraries
              like{' '}
              <ExternalLink href="https://github.com/validatorjs/validator.js">
                validatorjs
              </ExternalLink>
              and{' '}
              <ExternalLink href="https://github.com/supabase">
                supabase
              </ExternalLink>
              . I have created and am maintaining reactjs libraries such as{' '}
              <ExternalLink href="https://github.com/sassy-labs/datepicker">
                sassy-datepicker
              </ExternalLink>
              which has 3000 monthly downloads. I am looking forward to building
              many more useful projects for open source developers.
            </Text>
            <Text>
              I also work with local businesses to design, build and maintain
              their website and web applications. I also provide services like
              SEO/SMO optimization, technical advice, and consultation for
              building an online presence for businesses.
            </Text>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <LinkCTA href="/href" label="Know More" />
          </FadeInSection>
        </section>
        <section id="cta" className="mt-32 pt-8">
          <FadeInSection>
            <h3 className="text-4xl font-medium mb-12">
              Want to Work With Me?
            </h3>
          </FadeInSection>
          <FadeInSection delay={0.1}>
            <Text>
              Currently, I am looking for a part-time development job and am
              flexible in terms of roles and responsibilities. I am also open to
              working on open source projects and SaaS startups, where I can
              make valuable contributions to the product and the team. I promise
              you will have fun working with me once I get comfortable with you
              as I start cracking quite a few jokes.
            </Text>
          </FadeInSection>
          <FadeInSection delay={0.2}>
            <LinkCTA href="/contact" label="Contact Now" />
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
