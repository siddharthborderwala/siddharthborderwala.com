import React from 'react';

const Text: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className }) => {
  return (
    <p
      className={`text-lg md:text-xl text-gray-700 font-light tracking-wide mt-6 ${className}`}
    >
      {children}
    </p>
  );
};

export default Text;
