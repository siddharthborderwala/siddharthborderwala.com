import React from 'react';
import { Link } from 'gatsby';
import { Link as IconLink } from 'phosphor-react';

const slugify = text =>
  text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');

const HeaderLink = ({ label }) => (
  <Link className="inline-block ml-4" to={`./#${slugify(label)}`}>
    <IconLink weight="regular" className="inline -mt-2" />
  </Link>
);

export const H1 = ({ children }) => (
  <h1
    id={slugify(children)}
    className="text-3xl md:text-4xl text-gray-700 font-bold mt-12"
  >
    {children}
    <HeaderLink label={children} />
  </h1>
);

export const H2 = ({ children }) => (
  <h2
    id={slugify(children)}
    className="text-2xl md:text-3xl text-gray-700 font-bold mt-12"
  >
    {children}
    <HeaderLink label={children} />
  </h2>
);

export const H3 = ({ children }) => (
  <h3
    id={slugify(children)}
    className="text-base md:text-lg text-gray-700 font-bold mt-12"
  >
    {children}
    <HeaderLink label={children} />
  </h3>
);

export const H4 = ({ children }) => (
  <h4
    id={slugify(children)}
    className="text-md md:text-base text-gray-700 font-bold mt-12"
  >
    {children}
    <HeaderLink label={children} />
  </h4>
);

export const H5 = ({ children }) => (
  <h5
    id={slugify(children)}
    className="text-sm md:text-md text-gray-700 font-bold mt-12"
  >
    {children}
    <HeaderLink label={children} />
  </h5>
);

export const H6 = ({ children }) => (
  <h6 id={slugify(children)} className="text-xs text-gray-700 font-bold mt-12">
    {children}
    <HeaderLink label={children} />
  </h6>
);
