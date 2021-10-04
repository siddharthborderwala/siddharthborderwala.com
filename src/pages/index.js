import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PaperPlaneTilt } from 'phosphor-react';

import StandardLayout from '../layouts/standard';
import { Meta } from '../components/seo';

const siteTitle = 'Siddharth Borderwala';
const description =
  "Checkout Siddharth Borderwala's profile and get to know more about him.";
const imgSrc = 'https://www.codexsid.com/social.png';

const IndexPage = ({ location }) => {
  return (
    <StandardLayout>
      <Meta
        title={siteTitle}
        description={description}
        image={imgSrc}
        path={location.pathname}
      />
      <div
        style={{
          background: 'url(/dot-grid.png)',
          backgroundRepeat: 'repeat',
        }}
      >
        <header className="w-constraint flex justify-between items-center py-20 flex-col md:flex-row md:py-32">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Hi, I am Siddharth
            </h1>
            <h2 className="text-lg sm:text-2xl text-gray-700 mt-6">
              I am a Web Developer, keen on good designs and user-experiences. I
              am a Computer Science student and I love theoretical computer
              science.
            </h2>
            <a
              href="mailto:siddharthborderwala@gmail.com"
              className="bg-red-400 text-white text-lg py-2 px-4 mt-8 inline-flex items-center"
            >
              Contact Now <PaperPlaneTilt className="ml-4" weight="bold" />
            </a>
          </div>
          <div className="sm:pl-16">
            <StaticImage
              alt="Siddharth Borderwala"
              src="../images/siddharth.jpg"
              className="border-none rounded-full w-56 md:w-auto mt-16 md:mt-auto"
            />
          </div>
        </header>
        <main className="w-constraint pb-20 sm:pb-32">
          <section id="get-to-know-me" className="py-12">
            <h3 className="text-3xl font-semibold">Get to know me!</h3>
            <p className="text-base sm:text-xl text-gray-700 font-light tracking-wide mt-6">
              I am a Computer Science undergraduate studying at{' '}
              <a
                href="https://snu.edu.in"
                target="_blank"
                rel="noopener noreferrer"
                className="link"
              >
                Shiv Nadar University
              </a>{' '}
              in Delhi, NCR.
              <br />
              <br />
              I design and build beautiful websites and mobile apps. I write
              blogs once every two weeks, it may be about something new I tried
              out or a tech tutorial, or my experiences as a developer and a
              student.
              <br />
              <br />
              Besides, I love watching football, and I either play FIFA watch
              the latest series on Netflix over the weekend.
              <br />
              <br />I also do Yoga every-weekday morning for my health and to
              keep myself in shape.
            </p>
          </section>
        </main>
      </div>
    </StandardLayout>
  );
};

export default IndexPage;
