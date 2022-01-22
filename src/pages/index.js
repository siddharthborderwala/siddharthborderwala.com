import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  PaperPlaneTilt,
  ChatCircleDots,
  Cursor,
  Link as LinkIcon,
} from 'phosphor-react';

import StandardLayout from '../layouts/standard';
import { Meta } from '../components/seo';
import ExternalLink from '../components/external-link';
import Text from '../components/text';

const siteTitle = 'Siddharth Borderwala';
const description =
  'I am Siddharth Borderwala, a full-stack developer specializing in front-end development. Checkout my profile and get to know more about me!';
const twitterLink = 'https://twitter.com/sidborderwala';
const resumeLink =
  'https://drive.google.com/drive/folders/12V0HB9yLcDc6j2QDzSzVUefYCIq_vHXa?usp=sharing';

const IndexPage = ({ location }) => {
  return (
    <StandardLayout>
      <Meta
        title={siteTitle}
        description={description}
        path={location.pathname}
      />
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
            <h2 className="text-lg sm:text-2xl text-gray-700 mt-6">
              I build beautiful, fast, accessible and amazing websites. I am a
              computer science geek{' '}
              <span role="img" title="Love">
                💖
              </span>
            </h2>
            <a
              href="mailto:siddharthborderwala@gmail.com"
              className="bg-red-400 text-white text-lg py-2 px-4 mt-8 inline-flex items-center"
            >
              Contact Now <PaperPlaneTilt className="ml-4" weight="bold" />
            </a>
          </div>
          <div className="md:ml-16 rounded-full">
            <StaticImage
              alt="Siddharth Borderwala"
              src="../images/siddharth.png"
              className="border-none rounded-full w-56 md:w-96 mb-16 md:mb-auto overflow-clip"
              imgClassName="rounded-full"
            />
          </div>
        </header>
        <main className="w-constraint mt-16 pb-20 sm:pb-32">
          <section id="about" className="pt-8">
            <h3 className="text-4xl font-semibold mb-12">Get to Know Me!</h3>
            <Text>
              I am a Developer and Computer Science undergraduate studying at{' '}
              <ExternalLink href="https://snu.edu.in/home">
                Shiv Nadar University
              </ExternalLink>{' '}
              in Delhi, NCR. I design and build beautiful websites and mobile
              apps. I am trying to create an online audience using this
              blog-folio and{' '}
              <ExternalLink href={twitterLink}>twitter</ExternalLink>. I love
              the JavaScript ecosystem and Rustlang. Also, I am currently
              learning Golang.
            </Text>
            <Text>
              I began writing about the work I do and some engineering
              challenges I have solved on my{' '}
              <Link to="/blog" className="underline text-red-400">
                blog
              </Link>{' '}
              recently. Give some of them a read, and share any kind of feedback
              you have, I would be happy to improve!
            </Text>
            <Text>
              I try and read books, as much as I can and I love watching
              football, sitcoms and thrillers. Did I mention, I love playing
              FIFA and shooters with good story-lines?
            </Text>
            <a
              href="mailto:siddharthborderwala@gmail.com?subject=Hi"
              className="bg-red-400 text-white text-lg py-2 px-4 mt-8 inline-flex items-center"
            >
              Chat With Me <ChatCircleDots className="ml-4" weight="bold" />
            </a>
          </section>
          <section id="work" className="mt-32 pt-8">
            <h3 className="text-4xl font-semibold mb-12">My Work</h3>
            <Text>
              I am a Full-Stack JavaScript/TypeScript developer specializing in
              Reactjs, Nodejs, and the JAMStack ecosystem. I have worked on
              projects solo, as well as led teams of upto 6 developers to
              design, build and deploy production-grade web applications.
            </Text>
            <Text>
              I am an open source contributor and have contributed to libraries
              like{' '}
              <ExternalLink href="https://github.com/validatorjs/validator.js">
                validatorjs
              </ExternalLink>
              . I have created and am maintaining reactjs libraries such as{' '}
              <ExternalLink href="https://github.com/siddharthborderwala/teaful-logger">
                teaful-logger
              </ExternalLink>{' '}
              and{' '}
              <ExternalLink href="https://github.com/sassy-labs/datepicker">
                sassy-datepicker
              </ExternalLink>
              . I am looking forward to building many more useful projects for
              open source developers.
            </Text>
            <Text>
              I also work with local businesses to design, build and maintain
              their website and/or web applications. I also provide services
              like SEO/SMO opimzation, technical advise, and consultation for
              building an online presence for businesses.
            </Text>
            <ExternalLink
              href={resumeLink}
              className="mt-8 bg-red-400 text-white text-lg py-2 px-4 inline-flex items-center"
            >
              My Resume <LinkIcon className="ml-4" weight="bold" />
            </ExternalLink>
          </section>
          <section id="cta" className="mt-32 pt-8">
            <h3 className="text-4xl font-semibold mb-12">
              Want to Work With Me?
            </h3>
            <Text>
              I am open to working on open source projects and SaaS startups,
              where I can make a valuable contribution to the product and the
              team. I have interned at a SaaS startup called Turtlewig, where I
              created features such as version control, chat mentions, and magic
              invite links. I am proficient at frontend and backend, and I love
              solving exciting web engineering challenges. You can read about
              one such challenge{' '}
              <Link
                className="underline text-red-400"
                to="/blog/how-we-eliminated-a-race-condition-with-hasura-triggers"
              >
                here
              </Link>
              .
            </Text>
            <Text>
              I am quite experienced with taking businesses online. I provide
              services ranging from designing and developing sophisticated
              landing pages to fabricating complex web applications flaunting
              features such as authentication, content management systems, and
              payments.
            </Text>
            <Text>
              I promise I am fun to work with and once I get comfortable with
              you, I'll crack quite a few jokes 😆.
            </Text>
            <Link
              to="/contact"
              className="mt-8 bg-red-400 text-white text-lg py-2 px-4 inline-flex items-center"
            >
              Collaborate <Cursor className="ml-4" weight="bold" />
            </Link>
          </section>
        </main>
      </div>
    </StandardLayout>
  );
};

export default IndexPage;
