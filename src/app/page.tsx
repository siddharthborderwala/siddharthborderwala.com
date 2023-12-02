import Image from 'next/image';
import ExternalLink from '~/components/external-link';
import Text from '~/components/text';
import FadeInSection from '~/components/fade-in-section';
import LinkCTA from '~/components/link-cta';
import Siddharth from '~/images/siddharth-centered.jpg';

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
              I am a full stack developer. I build fast, beautiful and
              accessible websites and apps.
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
        <FadeInSection className="flex-[2] w-full flex items-center justify-center md:justify-end flex-shrink-0 py-12 sm:py-auto">
          <Image
            alt="Siddharth Borderwala"
            src={Siddharth}
            className="border-none rounded-full w-56 sm:w-64 lg:w-72 md:mb-auto shadow-red-100/50 hover:shadow-red-200/50 active:shadow-red-200/50"
          />
        </FadeInSection>
      </header>
      <main className="w-constraint mt-16 pb-20 sm:pb-32">
        <section id="about" className="pt-8">
          <FadeInSection>
            <h3 className="text-3xl sm:text-4xl font-medium">About Me</h3>
          </FadeInSection>
          <div className="grid gap-4 mt-12 grid-cols-1 grid-rows-6 md:grid-rows-3 md:grid-cols-8 bg-gradient-to-br from-red-400 via-pink-400 to-red-400 p-4 rounded-2xl shadow-2xl">
            <FadeInSection className="w-full col-span-1 md:col-span-5 row-span-1 h-full px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <h4 className="text-center text-3xl font-serif font-thin text-gray-700">
                Full Stack Developer
              </h4>
            </FadeInSection>
            <FadeInSection
              delay={0.1}
              className="w-full h-full col-span-1 md:col-span-3 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10"
            >
              <p className="text-center text-3xl font-serif font-thin text-gray-600">
                Technical Writer
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-4 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-3xl font-serif font-thin text-gray-600">
                Computer Science Graduate
              </p>
            </FadeInSection>
            <FadeInSection
              delay={0.1}
              className="w-full h-full col-span-1 md:col-span-4 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10"
            >
              <p className="text-center text-3xl font-serif font-thin text-gray-600">
                Open Source Contributor
              </p>
            </FadeInSection>
            <FadeInSection className="w-full h-full col-span-1 md:col-span-3 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10">
              <p className="text-center text-3xl font-serif font-thin text-gray-600">
                Designer
              </p>
            </FadeInSection>
            <FadeInSection
              delay={0.1}
              className="w-full h-full col-span-1 md:col-span-5 row-span-1 px-6 py-12 flex flex-col items-center justify-center bg-white border border-gray-200/20 backdrop-blur-md rounded-xl shadow-2xl shadow-gray-900/10"
            >
              <p className="text-center text-3xl font-serif font-thin text-gray-600">
                F1 and FIFA Fan
              </p>
            </FadeInSection>
          </div>
        </section>
        <section id="work" className="mt-32 pt-8">
          <FadeInSection>
            <h3 className="text-3xl sm:text-4xl font-medium mb-12">My Work</h3>
          </FadeInSection>
          <FadeInSection>
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
          <FadeInSection>
            <LinkCTA href="/href" label="Know More" />
          </FadeInSection>
        </section>
      </main>
    </>
  );
}
