'use client';

import { useState } from 'react';
import { Check, ClipboardText } from '@phosphor-icons/react';
import copy from 'copy-to-clipboard';

const clipIcon = <ClipboardText size="20" weight="bold" />;
const checkIcon = <Check size="20" weight="bold" />;

const CopyToClipboardButton: React.FC<{
  url: string;
}> = ({ url }) => {
  const [icon, setIcon] = useState(clipIcon);

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>) => {
    copy(url);
    e.preventDefault();
    e.stopPropagation();
    setIcon(checkIcon);
    setTimeout(() => {
      setIcon(clipIcon);
    }, 1500);
  };

  return (
    <button
      className="inline-block p-2 text-red-400 cursor-default"
      title="Copy link to clipboard"
      onClick={handleCopy}
    >
      {icon}
    </button>
  );
};

export default CopyToClipboardButton;
