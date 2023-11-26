import React from 'react';
import Link from 'next/link';
import { Link as LinkIcon } from '@phosphor-icons/react/dist/ssr';

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

const HeaderLink = ({ label }: { label: string }) => (
  <Link className="inline-block ml-4" href={`./#${slugify(label)}`}>
    <LinkIcon weight="regular" className="inline -mt-2" />
  </Link>
);

export const H1: React.FC<React.PropsWithChildren> = ({ children }) => {
  if (typeof children !== 'string') {
    throw new Error('Heading children must be a string');
  }

  return (
    <h1
      id={slugify(children)}
      className="text-3xl md:text-4xl text-gray-700 font-bold mt-12"
    >
      {children}
      <HeaderLink label={children} />
    </h1>
  );
};

export const H2: React.FC<React.PropsWithChildren> = ({ children }) => {
  if (typeof children !== 'string') {
    throw new Error('Heading children must be a string');
  }

  return (
    <h2
      id={slugify(children)}
      className="text-2xl md:text-3xl text-gray-700 font-bold mt-12"
    >
      {children}
      <HeaderLink label={children} />
    </h2>
  );
};

export const H3: React.FC<React.PropsWithChildren> = ({ children }) => {
  if (typeof children !== 'string') {
    throw new Error('Heading children must be a string');
  }

  return (
    <h3
      id={slugify(children)}
      className="text-base md:text-lg text-gray-700 font-bold mt-12"
    >
      {children}
      <HeaderLink label={children} />
    </h3>
  );
};

export const H4: React.FC<React.PropsWithChildren> = ({ children }) => {
  if (typeof children !== 'string') {
    throw new Error('Heading children must be a string');
  }

  return (
    <h4
      id={slugify(children)}
      className="text-md md:text-base text-gray-700 font-bold mt-12"
    >
      {children}
      <HeaderLink label={children} />
    </h4>
  );
};

export const H5: React.FC<React.PropsWithChildren> = ({ children }) => {
  if (typeof children !== 'string') {
    throw new Error('Heading children must be a string');
  }

  return (
    <h5
      id={slugify(children)}
      className="text-sm md:text-md text-gray-700 font-bold mt-12"
    >
      {children}
      <HeaderLink label={children} />
    </h5>
  );
};

export const H6: React.FC<React.PropsWithChildren> = ({ children }) => {
  if (typeof children !== 'string') {
    throw new Error('Heading children must be a string');
  }

  return (
    <h6
      id={slugify(children)}
      className="text-xs text-gray-700 font-bold mt-12"
    >
      {children}
      <HeaderLink label={children} />
    </h6>
  );
};
