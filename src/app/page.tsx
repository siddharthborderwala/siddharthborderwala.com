import {
  ChatCircleDots,
  PaperPlaneTilt,
  LinkSimple,
  Cursor,
} from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';
import ExternalLink from '~/components/external-link';
import Text from '~/components/text';
import Sid from '~/images/siddharth.webp';

export default function Home() {
  return (
    <div
      style={{
        background: 'url(/dot-grid.png)',
        backgroundRepeat: 'repeat',
      }}
    >
      <header className="w-constraint flex justify-between items-center py-8 sm:py-16 flex-col-reverse md:flex-row md:py-24">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold">
            Hi, I am Siddharth.
          </h1>
          <h2 className="text-lg sm:text-2xl text-gray-700 mt-6 font-normal">
            I build beautiful, fast, accessible and amazing websites. I am a
            computer science geek{' '}
            <span role="img" title="Love">
              💖
            </span>{' '}
            and I love programming 💻.
          </h2>
          <Link
            href="/contact"
            className="bg-red-400 text-white text-lg py-2 px-4 mt-8 inline-flex items-center"
          >
            Contact Now <PaperPlaneTilt className="ml-4" weight="bold" />
          </Link>
        </div>
        <div className="md:ml-16 rounded-full">
          <Image
            alt="Siddharth Borderwala"
            src={Sid}
            className="border-none rounded-full w-56 md:w-96 mb-16 md:mb-auto overflow-clip"
          />
        </div>
      </header>
      <main className="w-constraint mt-16 pb-20 sm:pb-32">
        <section id="about" className="pt-8">
          <h3 className="text-4xl font-semibold mb-12">Get to Know Me!</h3>
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
            I began writing about my work and some engineering challenges I have
            solved on my{' '}
            <Link href="/blog" className="underline text-red-400">
              blog
            </Link>{' '}
            recently. Give some of them a read and share any feedback or
            suggestions you have.
          </Text>
          <Text>
            Besides coding and writing, I love Formula 1 and Football and enjoy
            watching sitcoms and thrillers. Also, did I mention that I am always
            down to play FIFA and first-person shooters with good storylines?
          </Text>
          <Link
            href="/contact"
            className="bg-red-400 text-white text-lg py-2 px-4 mt-8 inline-flex items-center"
          >
            Chat With Me <ChatCircleDots className="ml-4" weight="bold" />
          </Link>
        </section>
        <section id="work" className="mt-32 pt-8">
          <h3 className="text-4xl font-semibold mb-12">My Work</h3>
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
          <Link
            href="/work"
            className="mt-8 bg-red-400 text-white text-lg py-2 px-4 inline-flex items-center"
          >
            Know More <LinkSimple className="ml-4" weight="bold" />
          </Link>
        </section>
        <section id="cta" className="mt-32 pt-8">
          <h3 className="text-4xl font-semibold mb-12">
            Want to Work With Me?
          </h3>
          <Text>
            Currently, I am looking for a part-time development job and am
            flexible in terms of roles and responsibilities. I am also open to
            working on open source projects and SaaS startups, where I can make
            valuable contributions to the product and the team. I promise you
            will have fun working with me once I get comfortable with you as I
            start cracking quite a few jokes 😆.
          </Text>
          <Link
            href="/contact"
            className="mt-8 bg-red-400 text-white text-lg py-2 px-4 inline-flex items-center"
          >
            Contact Now <Cursor className="ml-4" weight="bold" />
          </Link>
        </section>
      </main>
    </div>
  );
}
