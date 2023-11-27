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

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick: React.MouseEventHandler = useCallback(e => {
    if (!window.matchMedia('(min-width: 640px)').matches) return;

    if ((e.target as Element).tagName.toLowerCase() === 'a') {
      setIsOpen(false);
    }
  }, []);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
    }
    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="flex items-center py-4 sm:space-x-12 w-constraint">
      <Link className="mr-auto border rounded-full z-[200]" href="/">
        <Image
          src="/logo.svg"
          height={48}
          width={48}
          alt="logo"
          className="h-12 w-12 inline-block"
        />
        <p className="sr-only">Siddharth Borderwala</p>
      </Link>
      <button
        title="Toggle Menu"
        className="sm:hidden z-[200]"
        onClick={() => setIsOpen(v => !v)}
      >
        <p className="sr-only">Toggle Menu</p>
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="closeIcon"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <X size="30" weight="bold" />
            </motion.div>
          ) : (
            <motion.div
              key="openIcon"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
            >
              <List size="30" weight="bold" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: 'easeInOut',
            }}
            className={`flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6 z-[100] bg-gray-100 sm:bg-transparent justify-center items-center absolute top-0 left-0 w-screen h-screen sm:h-auto sm:w-auto sm:relative`}
            onClick={handleClick}
          >
            {navLinks.map(({ href, label }, index) => (
              <NavLink key={index} href={href} onClick={handleLinkClick}>
                {label}
              </NavLink>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default Nav;
