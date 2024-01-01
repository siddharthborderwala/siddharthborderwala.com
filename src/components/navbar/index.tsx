'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { List, X } from '@phosphor-icons/react';
import { motion, AnimatePresence } from 'framer-motion';

import NavLink from './nav-link';
import { Copyright } from '@phosphor-icons/react/dist/ssr';

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
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

  const year = new Date().getFullYear();

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
      <div className="mx-4 flex items-center p-2 justify-between bg-gray-900/10 backdrop-blur rounded-full shadow-2xl shadow-gray-900/5">
        <Link className="inline-block border rounded-full" href="/">
          {logo}
          <p className="sr-only">Siddharth Borderwala</p>
        </Link>
        <button
          title="Open Menu"
          onClick={() => setIsOpen(true)}
          className="mr-2 text-gray-900"
        >
          <List size="28" />
        </button>
      </div>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            className="fixed inset-0 h-screen w-screen z-[200] flex flex-col bg-gray-100"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
          >
            <div className="mx-4 mt-4 flex items-center p-2 justify-between bg-gray-900/10 backdrop-blur rounded-full shadow-2xl shadow-gray-900/5">
              <Link className="inline-block border rounded-full" href="/">
                {logo}
                <p className="sr-only">Siddharth Borderwala</p>
              </Link>
              <button
                title="Close Menu"
                onClick={() => setIsOpen(false)}
                className="mr-2 text-gray-900"
              >
                <motion.div
                  initial={{ opacity: 0, rotate: -45, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -45, scale: 0.5 }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                  }}
                >
                  <X size="28" />
                </motion.div>
              </button>
            </div>
            <motion.nav className="flex flex-col gap-6 items-center justify-center flex-grow mb-24">
              {navLinks.map(({ href, label }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 16 }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeIn',
                    delay: 0.2 + index * 0.15,
                  }}
                >
                  <NavLink href={href} onClick={handleLinkClick}>
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
            <div className="flex items-center font-serif py-6 justify-center text-gray-700">
              <Copyright weight="bold" />
              <p className="ml-2">{year} Siddharth Borderwala</p>
            </div>
          </motion.div>
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
