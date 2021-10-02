import React from 'react';

export const OrderedList = ({ children }) => (
  <ol className="list-decimal">
    {React.Children.map(children, child => child.classList.add('ml-4'))}
  </ol>
);

export const UnorderedList = ({ children }) => (
  <ul className="list-disc">{children}</ul>
);
