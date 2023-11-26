'use client';

import React, { useCallback, useMemo } from 'react';
import { Highlight } from 'prism-react-renderer';
import copy from 'copy-to-clipboard';

import CopyCodeButton from './copy-code-button';
import LanguageLabel from './language-label';
import { rosePineDawn } from './code-themes';

const CodeBlock: React.FC<
  React.PropsWithChildren<{
    className?: string;
  }>
> = ({ children, className = '' }) => {
  const language = className.replace(/language-/, '');

  const code = useMemo(() => {
    if (typeof children === 'string') {
      return children;
    }
    return '';
  }, [children]);

  const copyCode = useCallback(() => copy(code), [code]);

  return (
    <div className="mt-6">
      <LanguageLabel language={language} />
      <div className="relative text-sm">
        <Highlight theme={rosePineDawn} code={code} language={language}>
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={`${className} overflow-x-auto p-5`} style={style}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <CopyCodeButton onClick={copyCode} />
      </div>
    </div>
  );
};

export default CodeBlock;
