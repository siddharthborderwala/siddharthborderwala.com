import React from 'react';

export const Paragraph = ({ children }) => (
  <p className="font-para mt-4 leading-8 md:leading-9 text-lg md:text-xl">
    {children}
  </p>
);

export const Emphasis = ({ children }) => <i className="italic">{children}</i>;

export const Strong = ({ children }) => (
  <strong className="font-bold">{children}</strong>
);

export const StrikeThrough = ({ children }) => (
  <del className="font-light">{children}</del>
);

export const ThematicBreak = () => <hr />;
