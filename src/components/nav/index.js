import React from 'react';
import { Link } from 'gatsby';

import NavLink from './nav-link';
import Logo from '../../assets/logo.svg';

const isBrowser = typeof window !== 'undefined';

const Nav = () => {
  const route = isBrowser && window.location.pathname.slice(1).split('/')[0];
  const hash = isBrowser && window.location.hash;

  return (
    <nav className="flex items-center py-4 space-x-12 w-constraint">
      <Link className="mr-auto border rounded-full" to="/">
        <Logo className="h-12 w-12 inline-block" />
        <p className="sr-only">Siddharth Borderwala</p>
      </Link>
      <nav className="flex space-x-6">
        <NavLink href="/#about" isActive={route === '' && hash === '#about'}>
          About
        </NavLink>
        <NavLink href="/#work" isActive={route === '' && hash === '#work'}>
          Work
        </NavLink>
        <NavLink href="/contact" isActive={route === 'contact'}>
          Contact
        </NavLink>
        <NavLink href="/blog" isActive={route === 'blog'}>
          Blog
        </NavLink>
      </nav>
    </nav>
  );
};

export default Nav;
