import React from 'react';

const InlineCode: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <samp className="font-mono text-sm">{children}</samp>;
};

export default InlineCode;
