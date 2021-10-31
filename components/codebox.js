import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

hljs.registerLanguage('javascript', javascript);


export default function Codebox({ children }) {
  hljs.registerLanguage('javascript', javascript);
  useEffect(() => {
    hljs.initHighlighting();
    }, []);

  return (
<React.Fragment>
    <div className="codebox">
      <div className="code__inner">
{children}
      </div>
      </div>
</React.Fragment>
  );
};
