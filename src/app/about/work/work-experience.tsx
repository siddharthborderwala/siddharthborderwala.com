import React from 'react';
import { ArrowSquareOut, TextIndent } from '@phosphor-icons/react/dist/ssr';
import { TimelineView, TimelineSection } from './timeline';
import FadeInSection from '~/components/fade-in-section';
import Text from '~/components/text';

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
    title: 'Full Stack Developer',
    company: {
      name: 'Leap Wallet',
      url: 'https://leapwallet.io/',
    },
    from: 'Sep 2022',
    to: 'Present',
    description: [
      'Collaborated in a fast-paced environment, working across the stack to build and enhance the core features of Leap Wallet (a non-custodial, open-source cosmos blockchain wallet), driving user adoption and boosting weekly active users by four times.',
      'Built, documented and maintained open-source libraries and developer SDKs for the cosmos ecosystem to make it easier for cosmos developers to provide a better UX to their dApp users and to ship their dApps quicker',
      'Took the initiative to create and maintain documentation for four different projects, implementing CI/CD automation, optimizing build tooling resulting in up to 10x faster build times, and refactoring the codebase to remove technical debt.',
      'Configured sentry for error logging on four projects, slashing the app crash rates by 75%, and implemented a robust error handling system to improve the user experience.',
      'Conducted thorough code reviews, engaged in pair programming for effective debugging, and delivered presentations to share knowledge with peers.',
    ],
  },
  {
    title: 'Full Stack Web3 Developer',
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
      'Built innovative features for a digital assets delivery platform, such as review workflows, version control systems, and magic invite links for workspaces, working across the stack, front-end, backend and database modelling.',
      "Tackled challenging engineering issues, such as race conditions in asset processing, and developed robust solutions using cloud technologies eventually improving the application's reliability.",
      'Took the initiative to refactor sub-modules to reduce technical debt, in turn enhancing product performance and improving the developer experience for the team.',
    ],
  },
];

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="py-24">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl font-medium">Work Experience</h2>
        <Text>
          Here&apos;s what I have done in my career as a professional.
        </Text>
      </FadeInSection>
      {data.map((item, index) => (
        <TimelineView key={index} className="mt-16">
          <FadeInSection className="flex flex-col sm:flex-row snap-start">
            <TimelineSection
              title={item.title}
              className="flex flex-col sm:flex-row sm:items-start sm:justify-between sm:gap-8"
              subtitle={
                <div className="mt-3">
                  <p className="text-gray-500 text-xs uppercase">
                    {item.from} - {item.to}
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-gray-600 text-lg">{item.company.name}</p>
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
              <ul className="list-disc space-y-2 ml-4 sm:ml-0 sm:text-lg">
                {item.description.map((desc, index) => (
                  <li key={index}>
                    <p className="leading-normal font-light text-gray-700">
                      {desc}
                    </p>
                  </li>
                ))}
              </ul>
            </TimelineSection>
          </FadeInSection>
        </TimelineView>
      ))}
    </section>
  );
};

export default WorkExperience;
