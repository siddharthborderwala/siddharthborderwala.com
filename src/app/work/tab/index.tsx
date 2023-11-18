'use client';

import React, {
  useEffect,
  useMemo,
  useState,
  useContext,
  useCallback,
} from 'react';

const TabContext = React.createContext<
  | {
      activeTabId: string;
      setActiveTabId: React.Dispatch<React.SetStateAction<string>>;
    }
  | undefined
>(undefined);

export const TabProvider: React.FC<
  React.PropsWithChildren<{
    defaultTabId: string;
  }>
> = ({ children, defaultTabId }) => {
  const [activeTabId, setActiveTabId] = useState<string>(defaultTabId);

  const value = useMemo(() => {
    return { activeTabId, setActiveTabId } as const;
  }, [activeTabId]);

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};

export const TabButton: React.FC<
  React.PropsWithChildren<{
    tabId: string;
  }>
> = ({ tabId, children }) => {
  const tabContext = useContext(TabContext);

  if (!tabContext) {
    throw new Error('TabButton must be used within a TabProvider');
  }

  const { activeTabId, setActiveTabId } = tabContext;

  const isActive = useMemo(() => {
    return activeTabId === tabId;
  }, [activeTabId, tabId]);

  const handleClick = useCallback(() => {
    setActiveTabId(tabId);
  }, [setActiveTabId, tabId]);

  return (
    <button
      onClick={handleClick}
      className={`px-3 py-1 rounded-md text-gray-700 transition-all relative block hover:bg-gray-300 hover:bg-opacity-50 cursor-pointer ${
        isActive && 'bg-gray-300 bg-opacity-50'
      }`}
    >
      {children}
      {isActive ? (
        <div className="absolute pointer-events-none w-full left-0 -bottom-[8px] h-[2px] bg-orange-400 z-10" />
      ) : null}
    </button>
  );
};

export const TabItem: React.FC<
  React.PropsWithChildren<{
    tabId: string;
    className?: string;
  }>
> = ({ tabId, children, className }) => {
  const tabContext = useContext(TabContext);

  if (!tabContext) {
    throw new Error('TabButton must be used within a TabProvider');
  }

  const { activeTabId } = tabContext;

  const isActive = useMemo(() => {
    return activeTabId === tabId;
  }, [activeTabId, tabId]);

  return (
    <div
      className={`animate-fadeIn ${className ?? ''}`}
      style={{
        display: isActive ? 'block' : 'none',
      }}
    >
      {children}
    </div>
  );
};
