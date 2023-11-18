import React from 'react';

const InlineCode = ({ children }) => {
  return <samp className="font-mono">{children}</samp>;
};

export default InlineCode;
