import React from 'react';

const ExternalLink: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ href, className, children, ...props }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`link ${className ?? ''}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
