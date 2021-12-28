import React from 'react';
import { ClipboardText, LinkedinLogo, TwitterLogo } from 'phosphor-react';

const ShareCard = ({ title, author, url }) => (
  <div className="mt-16 text-center border-t pt-12">
    <h3 className="text-gray-700 font-bold text-3xl">Share this article</h3>
    <div className="flex items-center justify-center text-3xl space-x-4 mt-4">
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
        target="_blank"
        rel="noopener noreferrer"
        href={`https://www.linkedin.com/shareArticle/?url=${encodeURIComponent(
          url
        )}`}
      >
        <LinkedinLogo weight="bold" />
      </button>
      <button className="inline-block p-2 text-red-400">
        <ClipboardText weight="bold" />
      </button>
    </div>
  </div>
);

export default ShareCard;
