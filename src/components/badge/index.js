import React from 'react';

const Badge = ({ label }) => {
  return (
    <div className="bg-gray-200 text-red-500 text-sm md:text-md uppercase tracking-wide font-bold px-4 py-1 rounded-full inline-block whitespace-nowrap">
      {label}
    </div>
  );
};

export default Badge;
