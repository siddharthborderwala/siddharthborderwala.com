import React from 'react';

const LanguageLabel: React.FC<{
  language: string;
}> = ({ language }) => {
  return (
    <span
      className="bg-red-100 text-gray-600 px-2 rounded-t-md py-1 inline-flex items-center justify-center text-sm"
      style={{ minWidth: '4rem' }}
    >
      {language}
    </span>
  );
};

export default LanguageLabel;
