import React, { useCallback, useMemo } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import copy from 'copy-to-clipboard';
import PropTypes from 'prop-types';

import CopyCodeButton from './copy-code-button';
import LanguageLabel from './language-label';
import { rosePineDawn } from './code-themes';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  const code = useMemo(() => children.trim(), [children]);

  const copyCode = useCallback(() => copy(code), [code]);

  return (
    <div className="my-4">
      <LanguageLabel language={language} />
      <div className="relative">
        <Highlight
          {...defaultProps}
          theme={rosePineDawn}
          code={code}
          language={language}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, padding: '20px' }}>
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

CodeBlock.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default CodeBlock;
