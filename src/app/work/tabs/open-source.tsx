import React from 'react';
import { TabItem } from '../tab';

const OpenSource: React.FC<{
  tabId: string;
}> = ({ tabId }) => {
  return (
    <TabItem tabId={tabId} className="space-y-8 text-gray-700 py-8">
      <p className="py-6">
        I have been contributing to open-source projects since 2019.
      </p>
    </TabItem>
  );
};

export default OpenSource;
