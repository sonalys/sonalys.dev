import React from 'react';
import { Highlight, themes } from 'prism-react-renderer';
import Prism from 'prismjs/components/prism-core';

const PrismSyntaxHighlight = ({ children, className }) => {
  const language = className.replace(/language-/gm, '');
  return (
    <Highlight prism={Prism} theme={themes.okaidia} code={children} language={language}>
      {({ className, tokens, getLineProps, getTokenProps }) => {
        return (<code className={className}>
          {tokens.slice(0, -1).map((line, i) => {
            const lineProps = getLineProps({ line, key: i })
            delete lineProps.style
            return (
              <div key={i} {...lineProps}>
                {line.map((token, key) => {
                  const tokenProps = getTokenProps({ token, key })
                  delete tokenProps.style
                  return (
                    <span {...tokenProps} />
                  )
                })}
              </div>
            )
          })}
        </code>)
      }}
    </Highlight>
  );
};

export default PrismSyntaxHighlight;