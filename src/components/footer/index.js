import React from 'react';
import {
  GithubLogo,
  LinkedinLogo,
  Rss,
  TwitterLogo,
  Copyright,
} from 'phosphor-react';

import Name from '../../assets/name.svg';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="bg-red-400">
      <div className="flex items-start justify-between flex-col-reverse sm:flex-row py-12 w-constraint">
        <div className="mt-12 sm:mt-0">
          <Link to="/">
            <Name width="250" />
          </Link>
          <div className="mt-8 sm:mt-20 flex items-center">
            <Copyright />
            <p className="ml-2">
              {new Date().getFullYear()} Siddharth Borderwala
            </p>
          </div>
        </div>
        <nav className="flex space-x-6">
          <a
            href="https://twitter.com/sidborderwala"
            target="_blank"
            rel="noopener noreferrer"
            title="Twitter Profile"
          >
            <TwitterLogo weight="regular" size="24" />
          </a>
          <a
            href="https://github.com/siddharthborderwala"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub Profile"
          >
            <GithubLogo weight="regular" size="24" />
          </a>
          <a
            href="https://www.linkedin.com/in/siddharthborderwala/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
          >
            <LinkedinLogo weight="regular" size="24" />
          </a>
          <a className="force-disabled" title="RSS Feed" href="/rss.xml">
            <Rss weight="regular" size="24" />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
