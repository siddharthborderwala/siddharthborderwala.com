'use client';

import React, { useEffect, useRef, useState } from 'react';
import stripIndent from 'strip-indent';
import FadeInSection from '~/components/fade-in-section';
import CodeBlock from '~/components/mdx/code/code-block';
import Text from '~/components/text';
import { CodeExplorer } from './code-explorer';
import { useMotionValueEvent, useScroll } from 'framer-motion';

const Item = ({ children }: { children: string }) => {
  return (
    <FadeInSection
      delay={0.1}
      className="px-6 bg-gradient-to-br from-red-400 to-red-500 text-white py-2 shadow sm:text-xl self-start rounded-xl"
    >
      {children}
    </FadeInSection>
  );
};

export const TechStack = () => {
  const { scrollY } = useScroll();
  const sidebar = useRef<HTMLDivElement | null>(null);

  const [activeView, setActiveView] = useState('languages');

  useMotionValueEvent(scrollY, 'change', latest => {
    const languages = document.getElementById('languages')!;
    const frontend = document.getElementById('frontend')!;
    const backend = document.getElementById('backend')!;
    const tools = document.getElementById('tools')!;

    const sidebarTop = sidebar.current!.getBoundingClientRect().y;
    const languagesTop = languages.getBoundingClientRect().y;
    const frontendTop = frontend.getBoundingClientRect().y;
    const backendTop = backend.getBoundingClientRect().y;
    const toolsTop = tools.getBoundingClientRect().y;

    // the section whose top is closest to the sidebar's top is the active view
    // difference has to be positive
    const diffLanguages = languagesTop - sidebarTop;
    const diffFrontend = frontendTop - sidebarTop;
    const diffBackend = backendTop - sidebarTop;
    const diffTools = toolsTop - sidebarTop;

    const diffs = [
      {
        name: 'languages',
        diff: diffLanguages,
      },
      {
        name: 'frontend',
        diff: diffFrontend,
      },
      {
        name: 'backend',
        diff: diffBackend,
      },
      {
        name: 'tools',
        diff: diffTools,
      },
    ];

    // set active view to the one with the smallest deviation from 0
    const activeViewElem = diffs.reduce((prev, curr) =>
      Math.abs(curr.diff) < Math.abs(prev.diff) ? curr : prev
    );

    if (activeView !== activeViewElem.name) {
      setActiveView(activeViewElem.name);
    }
  });

  return (
    <section id="tech-stack" className="py-24">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl font-medium">Tech Stack</h2>
        <Text>Languages, libraries and frameworks I know and use.</Text>
      </FadeInSection>
      <div className="flex gap-12 mt-20">
        <FadeInSection
          ref={sidebar}
          className="space-y-8 h-fit sticky top-[25%] left-0 text-gray-800"
        >
          <h3
            className={`text-xl sm:text-2xl ${
              activeView === 'languages' ? 'text-red-400' : null
            }`}
          >
            Languages
          </h3>
          <h3
            className={`text-xl sm:text-2xl ${
              activeView === 'frontend' ? 'text-red-400' : null
            }`}
          >
            Front End
          </h3>
          <h3
            className={`text-xl sm:text-2xl ${
              activeView === 'backend' ? 'text-red-400' : null
            }`}
          >
            Back End
          </h3>
          <h3
            className={`text-xl sm:text-2xl ${
              activeView === 'tools' ? 'text-red-400' : null
            }`}
          >
            Tools
          </h3>
        </FadeInSection>
        <div className="flex-1 sm:ml-12 space-y-24">
          <div
            id="languages"
            className={`bg-white flex flex-col gap-2 rounded-2xl w-full `}
          >
            <Item>HTML</Item>
            <Item>CSS & SASS</Item>
            <Item>Javascript</Item>
            <Item>Typescript</Item>
            <Item>Ruby</Item>
            <Item>Go</Item>
            <Item>Rust</Item>
          </div>
          <div
            id="frontend"
            className={`bg-white flex flex-col gap-2 rounded-2xl w-full `}
          >
            <Item>Reactjs</Item>
            <Item>Nextjs</Item>
            <Item>Remix</Item>
            <Item>CSS-in-JS</Item>
            <Item>TailwindCSS</Item>
            <Item>Redux</Item>
          </div>
          <div
            id="backend"
            className={`bg-white flex flex-col gap-2 rounded-2xl w-full `}
          >
            <Item>Node.js</Item>
            <Item>Express.js</Item>
            <Item>Prisma</Item>
            <Item>Ruby on Rails</Item>
            <Item>PostgreSQL</Item>
            <Item>MySQL</Item>
            <Item>Redis</Item>
          </div>
          <div
            id="tools"
            className={`bg-white flex flex-col gap-2 rounded-2xl w-full `}
          >
            <Item>AWS</Item>
            <Item>Fly.io</Item>
            <Item>Docker</Item>
            <Item>VSCode</Item>
            <Item>Git</Item>
            <Item>Linear</Item>
            <Item>Notion</Item>
          </div>
        </div>
      </div>
    </section>
  );
};
