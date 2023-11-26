import React from 'react';

const LanguageLabel: React.FC<{
  language: string;
}> = ({ language }) => {
  return (
    <span
      className="bg-red-50 text-gray-600 ml-6 px-4 py-1 inline-flex items-center justify-center"
      style={{ minWidth: '4rem' }}
    >
      {language}
    </span>
  );
};

export default LanguageLabel;
