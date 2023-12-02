'use client';

import React, { useCallback, useState } from 'react';

const CopyCodeButton: React.FC<{
  onClick?: () => void;
}> = ({ onClick }) => {
  const [message, setMessage] = useState('Copy');

  const handleClick = useCallback(() => {
    setMessage('Copied');
    onClick?.();
    setTimeout(() => setMessage('Copy'), 1000);
  }, [onClick]);

  return (
    <button
      className="absolute text-sm top-4 right-4 py-1 px-2 bg-red-400 text-gray-100 rounded-lg"
      onClick={handleClick}
    >
      {message}
    </button>
  );
};

export default CopyCodeButton;
