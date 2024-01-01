import { Highlight } from 'prism-react-renderer';
import React from 'react';
import stripIndent from 'strip-indent';
import { rosePineDawn } from '~/components/mdx/code/code-themes';

export const CodeExplorer = ({
  data,
}: {
  data: {
    language: string;
    code: string;
  }[];
}) => {
  return data.map(({ language, code }, i) => (
    <Highlight
      key={language}
      theme={rosePineDawn}
      code={stripIndent(code)}
      language={language}
    >
      {({ className: cx, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`overflow-x-auto p-5 font-mono text-sm ${cx}`}
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
  ));
};
