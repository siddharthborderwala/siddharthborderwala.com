'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

import NavLink from './nav-link';

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/work',
    label: 'Work',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
];

const logo = (
  <Image
    src="/logo.svg"
    height={36}
    width={36}
    alt="Siddharth Borderwala"
    className="inline-block bg-white rounded-full border-none"
    style={{
      scale: 1.05,
    }}
  />
);

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <div className="w-constraint w-full flex items-center justify-between py-4">
        <Link className="inline-block border rounded-full" href="/">
          {logo}
          <p className="sr-only">Siddharth Borderwala</p>
        </Link>
        <button title="Open Menu" onClick={() => setIsOpen(true)}>
          <p className="sr-only">Open Menu</p>
          <List size="30" weight="bold" />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <div className="fixed inset-0 h-screen w-screen z-[200] flex flex-col bg-gray-100">
            <div className="w-constraint w-full flex items-center justify-between py-4">
              <Link className="inline-block border rounded-full" href="/">
                {logo}
                <p className="sr-only">Siddharth Borderwala</p>
              </Link>
              <button title="Close Menu" onClick={() => setIsOpen(false)}>
                <p className="sr-only">Close Menu</p>
                <X size="30" weight="bold" />
              </button>
            </div>
            <motion.nav
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{
                duration: 0.2,
                ease: 'easeInOut',
              }}
              className="flex flex-col gap-6 items-center justify-center flex-grow mb-24"
            >
              {navLinks.map(({ href, label }, index) => (
                <NavLink key={index} href={href} onClick={handleLinkClick}>
                  {label}
                </NavLink>
              ))}
            </motion.nav>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

const DesktopNav = () => {
  return (
    <motion.div className="mx-4 w-full lg:w-[80%] 2xl:w-[1024px] flex items-center p-2 justify-between bg-gray-900/10 backdrop-blur rounded-full shadow-2xl shadow-gray-900/5">
      <div className="flex items-center">
        <Link className="border rounded-full" href="/" title="Home Page">
          {logo}
        </Link>
      </div>
      <ul className="list-none flex gap-6 mr-4">
        {navLinks.map(({ href, label }, index) => (
          <li key={index}>
            <NavLink href={href}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Nav = () => {
  return (
    <nav className="py-4 fixed top-0 left-0 w-full z-[200]">
      <div className="block sm:hidden relative">
        <MobileNav />
      </div>
      <div className="hidden sm:flex sm:items-center sm:justify-center">
        <DesktopNav />
      </div>
    </nav>
  );
};

export default Nav;
