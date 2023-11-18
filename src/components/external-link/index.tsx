import React from 'react';

const ExternalLink: React.FC<
  React.PropsWithChildren<{
    href: string;
    className?: string;
  }>
> = ({ href, className, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${className ?? ''}`}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
