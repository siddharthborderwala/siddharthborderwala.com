import React from 'react';

export const Paragraph: React.FC<React.PropsWithChildren> = ({ children }) => (
  <p className="font-para mt-4 leading-8 md:leading-9 text-lg md:text-xl">
    {children}
  </p>
);

export const Emphasis: React.FC<React.PropsWithChildren> = ({ children }) => (
  <i className="italic">{children}</i>
);

export const Strong: React.FC<React.PropsWithChildren> = ({ children }) => (
  <strong className="font-bold">{children}</strong>
);

export const StrikeThrough: React.FC<React.PropsWithChildren> = ({
  children,
}) => <del className="font-light">{children}</del>;

export const ThematicBreak = () => <hr />;
