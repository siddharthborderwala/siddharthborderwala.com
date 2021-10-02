import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { PaperPlaneTilt } from 'phosphor-react';

import StandardLayout from '../layouts/standard';
import { Meta } from '../components/seo';

const siteTitle = 'Siddharth Borderwala';
const description =
  "Checkout Siddharth Borderwala's profile and get to know more about him.";
const imgSrc = 'https://www.codexsid.com/social.png';

const IndexPage = () => {
  return (
    <StandardLayout>
      <Meta title={siteTitle} description={description} image={imgSrc} />
      <header
        style={{
          background: 'url(/static/dot-grid.svg)',
          backgroundRepeat: 'repeat',
        }}
        className="w-constraint flex justify-between items-center py-32"
      >
        <div>
          <h1 className="text-5xl font-bold">Hi, I am Siddharth</h1>
          <h2 className="text-2xl text-gray-600 mt-6">
            I am a Web Developer, keen on good designs and user-experiences. I
            am a Computer Science student and I love theoretical computer
            science.
          </h2>
          <Link
            to="/contact"
            className="bg-red-400 text-white text-lg py-2 px-4 mt-8 inline-flex items-center"
          >
            Contact Now <PaperPlaneTilt className="ml-4" weight="bold" />
          </Link>
        </div>
        <StaticImage alt="Siddharth Borderwala" src="" />
      </header>
      <main className="w-constraint">
        <section id="get-to-know-me" className="py-12">
          <h3 className="text-3xl font-semibold">Get to know me!</h3>
          <p className="text-xl font-light tracking-wide mt-6">
            I am a Computer Science undergraduate studying at{' '}
            <a
              href="https://snu.edu.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Shiv Nadar University
            </a>{' '}
            in Delhi, NCR. I design and build beautiful websites and mobile
            apps. I write blogs once every two weeks, it may be about something
            new I tried out or a tech tutorial, or my experiences as a developer
            and a student. Besides, I love watching football, and I either play
            FIFA on the weekends or watch the latest series on Netflix. I also
            do Yoga every-weekday morning for my health and to keep myself in
            shape.
          </p>
        </section>
      </main>
    </StandardLayout>
  );
};

export default IndexPage;
