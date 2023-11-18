import React from 'react';

const Text: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <p className="text-lg md:text-xl text-gray-700 font-light tracking-wide mt-6">
      {children}
    </p>
  );
};

export default Text;
