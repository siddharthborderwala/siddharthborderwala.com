'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { List, X } from '@phosphor-icons/react';

import NavLink from './nav-link';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick: React.MouseEventHandler = useCallback(e => {
    if (!window.matchMedia('(min-width: 640px)').matches) return;

    if ((e.target as Element).tagName.toLowerCase() === 'a') {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <nav className="flex items-center py-4 sm:space-x-12 w-constraint">
      <Link className="mr-auto border rounded-full" href="/">
        <img src="/logo.svg" alt="logo" className="h-12 w-12 inline-block" />
        <p className="sr-only">Siddharth Borderwala</p>
      </Link>
      <button
        title="Toggle Menu"
        className="sm:hidden z-20"
        onClick={() => setIsOpen(v => !v)}
      >
        <p className="sr-only">Toggle Menu</p>
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
        <NavLink href="/">Home</NavLink>
        <NavLink href="/work">Work</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <NavLink href="/blog">Blog</NavLink>
      </nav>
    </nav>
  );
};

export default Nav;
