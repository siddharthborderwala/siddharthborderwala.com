import React from 'react';

export const Paragraph = ({ children }) => <p>{children}</p>;

export const Emphasis = ({ children }) => <i className="italic">{children}</i>;

export const Strong = ({ children }) => (
  <strong className="font-bold">{children}</strong>
);

export const StrikeThrough = ({ children }) => (
  <del className="font-light">{children}</del>
);

export const ThematicBreak = () => <hr />;
