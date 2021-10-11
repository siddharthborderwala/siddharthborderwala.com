import React from 'react';
import { Link } from 'gatsby';
import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react';

// import NavLink from './nav-link';
import Logo from '../../assets/logo.svg';

const Nav = () => {
  // const route = window.location.pathname.slice(1).split('/').shift();

  return (
    <nav className="flex items-center py-4 space-x-12 w-constraint">
      <Link className="mr-auto border rounded-full" to="/">
        <Logo className="h-12 w-12 inline-block" />
        <p className="sr-only">Siddharth Borderwala</p>
      </Link>
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
      </nav>
      {/* <NavLink href="/blog" isActive={route === 'blog'}>
        Blog
      </NavLink>
      <NavLink href="/about" isActive={route === 'about'}>
        About
      </NavLink>
      <NavLink href="/contact" isActive={route === 'contact'}>
        Contact
      </NavLink> */}
    </nav>
  );
};

export default Nav;
