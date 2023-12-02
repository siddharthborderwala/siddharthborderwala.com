import React from 'react';
import Link from 'next/link';
import { Hash } from '@phosphor-icons/react/dist/ssr';

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

const HeaderLink = ({ label }: { label: string }) => (
  <Link className="inline-block ml-3" href={`#${slugify(label)}`}>
    <Hash
      weight="regular"
      className="inline mb-1 text-gray-400 transition-all md:opacity-0 md:group-hover:opacity-100 hover:text-gray-600"
    />
  </Link>
);

export const H1: React.FC<React.PropsWithChildren> = ({ children }) => {
  if (typeof children !== 'string') {
    throw new Error('Heading children must be a string');
  }

  return (
    <h1
      id={slugify(children)}
      className="group text-3xl md:text-4xl text-gray-900 font-medium mt-12"
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
      className="group text-2xl md:text-3xl text-gray-900 font-medium mt-12"
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
      className="group text-lg md:text-xl text-gray-900 font-medium mt-12"
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
      className="group text-md md:text-lg text-gray-900 font-medium mt-12"
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
      className="group text-sm md:text-md text-gray-900 font-medium mt-12"
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
      className="group text-xs text-gray-900 font-medium mt-12"
    >
      {children}
      <HeaderLink label={children} />
    </h6>
  );
};
