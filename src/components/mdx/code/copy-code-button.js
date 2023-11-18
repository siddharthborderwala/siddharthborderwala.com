import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CopyCodeButton = ({ onClick }) => {
  const [message, setMessage] = useState('Copy');

  const handleClick = () => {
    setMessage('Copied');
    onClick();
    setTimeout(() => setMessage('Copy'), 1000);
  };

  return (
    <button
      className="absolute top-4 right-4 bg-red-400 px-2 text-gray-100"
      onClick={handleClick}
    >
      {message}
    </button>
  );
};

CopyCodeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default CopyCodeButton;
