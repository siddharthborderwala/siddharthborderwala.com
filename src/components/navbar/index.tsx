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
          <Image
            src="/logo.svg"
            height={48}
            width={48}
            alt="logo"
            className="h-12 w-12 inline-block"
          />
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
                <Image
                  src="/logo.svg"
                  height={48}
                  width={48}
                  alt="logo"
                  className="h-12 w-12 inline-block"
                />
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
    <div className="flex items-center py-4 w-constraint justify-between">
      <Link className="border rounded-full" href="/">
        <Image
          src="/logo.svg"
          height={48}
          width={48}
          alt="logo"
          className="h-12 w-12 inline-block"
        />
        <p className="sr-only">Siddharth Borderwala</p>
      </Link>
      <ul className="list-none flex gap-6">
        {navLinks.map(({ href, label }, index) => (
          <li key={index}>
            <NavLink href={href}>{label}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Nav = () => {
  return (
    <nav>
      <div className="block sm:hidden relative">
        <MobileNav />
      </div>
      <div className="hidden sm:block">
        <DesktopNav />
      </div>
    </nav>
  );
};

export default Nav;
