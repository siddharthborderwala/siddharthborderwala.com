import React from 'react';

export const H1 = ({ children }) => (
  <h1 className="text-3xl md:text-4xl text-gray-700 font-bold mt-12">
    {children}
  </h1>
);

export const H2 = ({ children }) => (
  <h2 className="text-2xl md:text-3xl text-gray-700 font-bold mt-12">
    {children}
  </h2>
);

export const H3 = ({ children }) => (
  <h3 className="text-base md:text-lg text-gray-700 font-bold mt-12">
    {children}
  </h3>
);

export const H4 = ({ children }) => (
  <h4 className="text-md md:text-base text-gray-700 font-bold mt-12">
    {children}
  </h4>
);

export const H5 = ({ children }) => (
  <h5 className="text-sm md:text-md text-gray-700 font-bold mt-12">
    {children}
  </h5>
);

export const H6 = ({ children }) => (
  <h6 className="text-xs text-gray-700 font-bold mt-12">{children}</h6>
);
