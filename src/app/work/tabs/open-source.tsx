import { TextIndent } from '@phosphor-icons/react/dist/ssr';
import React from 'react';

const OpenSource: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl text-red-400 font-medium flex gap-2 items-center">
        <TextIndent weight="bold" /> Open Source Contributions
      </h2>
      <p className="mt-6 text-xl font-light text-gray-700">
        I have been contributing to open-source projects since 2019. More about
        this coming soon.
      </p>
    </div>
  );
};

export default OpenSource;
