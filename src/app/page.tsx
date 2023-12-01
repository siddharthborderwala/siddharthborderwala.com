import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from '~/components/external-link';
import Text from '~/components/text';
import FadeInSection from '~/components/fade-in-section';
import LinkCTA from '~/components/link-cta';
import Sid from '~/images/siddharth.webp';

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
              I am a full stack developer. I build fast, beautiful and
              accessible websites and apps.
            </Text>
          </FadeInSection>
          <div className="flex items-center justify-start gap-4">
            <FadeInSection delay={0.2}>
              <LinkCTA href="/contact" label="Contact Me" />
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <LinkCTA isSecondary={true} href="/work" label="Know More" />
            </FadeInSection>
          </div>
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
            <h3 className="text-4xl font-medium">About Me</h3>
          </FadeInSection>
          <FadeInSection>
            <Text>Here&apos;s a few things about me</Text>
          </FadeInSection>
          <div
            className="grid gap-4 mt-12"
            style={{
              gridTemplateColumns: `repeat(8, 1fr)`,
              gridTemplateRows: 'repeat(3, 10rem)',
            }}
          >
            <FadeInSection
              delay={0.3}
              className="w-full h-full p-4 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-gray-200 shadow-2xl shadow-gray-200/50"
              style={{
                gridColumn: '1 / 6',
                gridRow: '1 / 2',
              }}
            >
              <p className="text-center text-lg font-serif">
                Full Stack Developer
              </p>
            </FadeInSection>
            <FadeInSection
              delay={0.3}
              className="w-full h-full p-4 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-gray-200 shadow-2xl shadow-gray-200/50"
              style={{
                gridColumn: '6 / 9',
                gridRow: '1 / 2',
              }}
            >
              <p className="text-center font-serif">Technical Writer</p>
            </FadeInSection>
            <FadeInSection
              delay={0.4}
              className="w-full h-full p-4 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-gray-200 shadow-2xl shadow-gray-200/50"
              style={{
                gridColumn: '1 / 4',
                gridRow: '2 / 3',
              }}
            >
              <p className="text-center font-serif">
                Computer Science Graduate
              </p>
            </FadeInSection>
            <FadeInSection
              delay={0.4}
              className="w-full h-full flex items-center justify-center bg-gray-50 rounded-xl shadow-2xl shadow-gray-200/50"
              style={{
                gridColumn: '4 / 6',
                gridRow: '2 / 3',
                backgroundImage: `url(${Sid.src})`,
                backgroundSize: '150%',
                backgroundPosition: 'center 30%',
              }}
            ></FadeInSection>
            <FadeInSection
              delay={0.4}
              className="w-full h-full p-4 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-gray-200 shadow-2xl shadow-gray-200/50"
              style={{
                gridColumn: '6 / 9',
                gridRow: '2 / 3',
              }}
            >
              <p className="text-center font-serif">Open Source Contributor</p>
            </FadeInSection>
            <FadeInSection
              delay={0.6}
              className="w-full h-full p-4 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-gray-200 shadow-2xl shadow-gray-200/50"
              style={{
                gridColumn: '1 / 4',
                gridRow: '3 / 4',
              }}
            >
              <p className="text-center font-serif">F1 Fan</p>
            </FadeInSection>
            <FadeInSection
              delay={0.6}
              className="w-full h-full p-4 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-gray-200 shadow-2xl shadow-gray-200/50"
              style={{
                gridColumn: '4 / 7',
                gridRow: '3 / 4',
              }}
            >
              <p className="text-center font-serif">Football Enthusiast</p>
            </FadeInSection>
            <FadeInSection
              delay={0.6}
              className="w-full h-full p-4 flex items-center justify-center bg-gray-50 rounded-xl border-2 border-gray-200 shadow-2xl shadow-gray-200/50"
              style={{
                gridColumn: '7 / 9',
                gridRow: '3 / 4',
              }}
            >
              <p className="text-center font-serif">Designer</p>
            </FadeInSection>
          </div>
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
            <LinkCTA href="/work" label="Know More" />
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
