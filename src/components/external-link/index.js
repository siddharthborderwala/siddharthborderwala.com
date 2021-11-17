import React from 'react';

const ExternalLink = ({ href, className, children }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? className : 'link'}
    >
      {children}
    </a>
  );
};

export default ExternalLink;
