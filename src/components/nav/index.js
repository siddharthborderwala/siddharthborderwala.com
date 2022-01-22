import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { List, X } from 'phosphor-react';

import NavLink from './nav-link';
import Logo from '../../assets/logo.svg';

const isBrowser = typeof window !== 'undefined';

const Nav = () => {
  const route = isBrowser && window.location.pathname.slice(1).split('/')[0];
  const hash = isBrowser && window.location.hash;

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = e => {
    if (!window.matchMedia('(min-width: 640px)').matches) return;

    if (e.target.tagName.toLowerCase() === 'a') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  return (
    <nav className="flex items-center py-4 sm:space-x-12 w-constraint">
      <Link className="mr-auto border rounded-full" to="/">
        <Logo className="h-12 w-12 inline-block" />
        <p className="sr-only">Siddharth Borderwala</p>
      </Link>
      <button className="sm:hidden z-20" onClick={() => setIsOpen(v => !v)}>
        {isOpen ? (
          <X size="30" weight="bold" />
        ) : (
          <List size="30" weight="bold" />
        )}
      </button>
      <nav
        className={`flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 ${
          isOpen ? 'flex' : 'hidden sm:flex'
        } z-10 bg-gray-100 sm:bg-transparent justify-center items-center absolute top-0 left-0 w-screen h-screen sm:h-auto sm:w-auto sm:relative`}
        onClick={handleClick}
      >
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
