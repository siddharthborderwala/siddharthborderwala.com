import React from 'react';
import { ArrowSquareOut } from '@phosphor-icons/react/dist/ssr';
import { TimelineView, TimelineSection } from './timeline';
import { TabItem } from '../tab';
import FadeInSection from '~/components/fade-in-section';

const data: {
  title: string;
  company: {
    name: string;
    url?: string;
  };
  from: string;
  to: string;
  description: string[];
}[] = [
  {
    title: 'Full Stack Web3 Engineer',
    company: {
      name: 'Leap Wallet',
      url: 'https://leapwallet.io/',
    },
    from: 'Sep 2022',
    to: 'Present',
    description: [
      'Collaborated in a fast-paced environment to build and enhance essential features of Leap Cosmos Wallet driving user adoption and boosting WAUs up by four times.',
      'Built and maintained multiple open-source libraries and SDKs for the Cosmos ecosystem, to facilitate the development of new features and improve the developer experience.',
      'Took initiative by creating and maintaining documentation for four projects, implementing CI/CD automation, optimizing build tooling resulting in up to 10x faster build times, and refactoring the codebase to remove technical debt.',
      'Configured sentry for error logging on four projects, slashing the app crash rates by 75%, and implemented a robust error handling system to improve the user experience.',
      'Contributed to the planning and estimating of new features, conducted thorough code reviews, engaged in pair programming for effective debugging, and delivered presentations to share knowledge with peers.',
    ],
  },
  {
    title: 'Full Stack Web3 Engineer',
    company: {
      name: 'Crypto Capable',
    },
    from: 'Feb 2022',
    to: 'Jun 2022',
    description: [
      'Built, tested, and deployed smart contracts and DAOs on the NEAR blockchain, implementing key features such as voting, financial transactions, and cross-contract calls to support a successful project launch in under three months.',
      'Created and maintained detailed technical documentation, including a comprehensive development wiki, to facilitate team collaboration and understanding of the project infrastructure.',
      'Carried out technical feasibility checks as a part of R&D while helping out team members and collaborating on ongoing projects across the company to meet objectives and ensure successful outcomes.',
    ],
  },
  {
    title: 'Full Stack Development Intern',
    company: {
      name: 'Turtlewig',
    },
    from: 'May 2021',
    to: 'Aug 2021',
    description: [
      'Spearheaded the development of innovative features such as review workflows, version control systems for digital assets, and magic invite links for workspaces, working across the tech stack.',
      'Tackled challenging engineering issues, such as race conditions, and developed robust solutions using cloud technologies while improving the reliability of the production application.',
      'Took the initiative to refactor sub-modules to reduce technical debt, enhance overall product performance, and improve the developer experience for the team.',
    ],
  },
];

const Professional: React.FC<{
  tabId: string;
}> = ({ tabId }) => {
  return (
    <TabItem tabId={tabId} className="py-8">
      {data.map((item, index) => (
        <TimelineView key={index} className="py-6">
          <FadeInSection
            className="flex flex-col sm:flex-row snap-start sm:px-4"
            delay={(index + 1) * 0.1}
          >
            <TimelineSection
              title={item.title}
              subtitle={
                <div className="mt-3">
                  <p className="text-gray-500 text-xs uppercase">
                    {item.from} - {item.to}
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-gray-700 text-lg">{item.company.name}</p>
                    {item.company.url ? (
                      <a
                        title="Company website"
                        href={item.company.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:underline"
                      >
                        <ArrowSquareOut weight="bold" size={16} />
                      </a>
                    ) : null}
                  </div>
                </div>
              }
            >
              <ul className="list-disc space-y-2 mt-4 ml-4 sm:ml-0 sm:text-lg">
                {item.description.map((desc, index) => (
                  <li key={index}>
                    <p className="leading-7 font-light text-gray-700">{desc}</p>
                  </li>
                ))}
              </ul>
            </TimelineSection>
          </FadeInSection>
        </TimelineView>
      ))}
    </TabItem>
  );
};

export default Professional;
