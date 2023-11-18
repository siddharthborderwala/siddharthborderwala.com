import React from 'react';

export const OrderedList = ({ children }) => (
  <ol className="list-decimal ml-8 mt-4 text-lg md:text-xl space-y-2">
    {children}
  </ol>
);

export const UnorderedList = ({ children }) => (
  <ul className="list-disc ml-8 mt-4 text-lg md:text-xl space-y-2">
    {children}
  </ul>
);
