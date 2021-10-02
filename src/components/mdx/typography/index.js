import React from 'react';

export const Paragraph = ({ children }) => (
  <p className="text-base leading-4 font-sans">{children}</p>
);

export const Emphasis = ({ children }) => (
  <i className="text-base italic">{children}</i>
);

export const Strong = ({ children }) => (
  <strong className="text-base font-bold">{children}</strong>
);

export const StrikeThrough = ({ children }) => (
  <del className="text-base font-light">{children}</del>
);

export const ThematicBreak = () => <hr />;
