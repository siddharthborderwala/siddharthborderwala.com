'use client';

import React, { useCallback, useMemo } from 'react';
import { Highlight } from 'prism-react-renderer';
import copy from 'copy-to-clipboard';

import CopyCodeButton from './copy-code-button';
import LanguageLabel from './language-label';
import { rosePineDawn } from './code-themes';
import { default as InlineCode } from './inline-code';

const CodeBlock: React.FC<
  React.PropsWithChildren<{
    className?: string;
    showCopyButton?: boolean;
  }>
> = ({ children, className = '', showCopyButton = true }) => {
  const language = className.match(/language-(\w+)/)?.[1] ?? '';

  const code = useMemo(() => {
    if (typeof children === 'string') {
      return children;
    }
    return '';
  }, [children]);

  const copyCode = useCallback(() => copy(code), [code]);

  if (className === '') {
    return <InlineCode>{children}</InlineCode>;
  }

  return (
    <div className="mt-6">
      <LanguageLabel language={language} />
      <div className="relative">
        <Highlight theme={rosePineDawn} code={code} language={language}>
          {({ className: cx, style, tokens, getLineProps, getTokenProps }) => (
            <pre
              className={`${className} ${cx} overflow-x-auto p-5 font-mono text-sm`}
              style={style}
            >
              {tokens
                .map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))
                .slice(0, -1)}
            </pre>
          )}
        </Highlight>
        {showCopyButton ? <CopyCodeButton onClick={copyCode} /> : null}
      </div>
    </div>
  );
};

export default CodeBlock;
