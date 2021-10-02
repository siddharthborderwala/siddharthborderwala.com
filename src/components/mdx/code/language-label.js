import React from 'react';
import PropTypes from 'prop-types';

const LanguageLabel = ({ language }) => {
  return (
    <span
      className="bg-red-50 text-gray-600 ml-6 px-4 py-1 inline-flex items-center justify-center"
      style={{ minWidth: '4rem' }}
    >
      {language}
    </span>
  );
};

LanguageLabel.propTypes = {
  language: PropTypes.string.isRequired,
};

export default LanguageLabel;
