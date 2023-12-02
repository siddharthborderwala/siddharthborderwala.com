import React from 'react';

const InlineCode: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <samp className="font-mono bg-red-100/80 shadow-inner shadow-gray-900/5 font-bold text-sm rounded px-2 py-1">
      {children}
    </samp>
  );
};

export default InlineCode;
