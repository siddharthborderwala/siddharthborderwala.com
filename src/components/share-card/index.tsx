'use client';

import React, { useState } from 'react';
import {
  Check,
  ClipboardText,
  LinkedinLogo,
  TwitterLogo,
} from '@phosphor-icons/react';
import copy from 'copy-to-clipboard';

const ShareCard: React.FC<{
  title: string;
  author: string;
  url: string;
}> = ({ title, author, url }) => {
  const [icon, setIcon] = useState(<ClipboardText weight="bold" />);

  const handleCopy = () => {
    copy(url);
    setIcon(<Check weight="bold" />);
    setTimeout(() => {
      setIcon(<ClipboardText weight="bold" />);
    }, 1500);
  };

  const handleLinkedinShare = () => {
    window.open(
      `https://linkedin.com/shareArticle?url=${encodeURIComponent(
        url
      )}&mini=true&title=${encodeURIComponent(title)}`,
      '_blank',
      'width=600,height=500'
    );
  };

  return (
    <div className="md:text-center">
      <h3 className="text-gray-700 font-bold text-3xl">Share this article</h3>
      <div className="flex items-center md:justify-center text-3xl space-x-4 mt-4">
        <a
          className="inline-block p-2 text-red-400"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(
            'Checkout the article "' + title + '" by ' + author
          )}`}
        >
          <TwitterLogo weight="bold" />
        </a>
        <button
          className="inline-block p-2 text-red-400"
          onClick={handleLinkedinShare}
        >
          <LinkedinLogo weight="bold" />
        </button>
        <button className="inline-block p-2 text-red-400" onClick={handleCopy}>
          {icon}
        </button>
      </div>
    </div>
  );
};

export default ShareCard;
