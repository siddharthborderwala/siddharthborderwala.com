import React from 'react';
import { Link } from 'gatsby';

import NavLink from './nav-link';
import Logo from '../../assets/logo.svg';

const Nav = () => {
  const route = window.location.pathname.slice(1).split('/').shift();

  return (
    <nav className="flex items-center py-4 space-x-12 w-constraint">
      <Link className="mr-auto border rounded-full" to="/">
        <Logo className="h-12 w-12 inline-block" />
      </Link>
      <NavLink href="/blog" isActive={route === 'blog'}>
        Blog
      </NavLink>
      <NavLink href="/about" isActive={route === 'about'}>
        About
      </NavLink>
      <NavLink href="/contact" isActive={route === 'contact'}>
        Contact
      </NavLink>
    </nav>
  );
};

export default Nav;
