import Head from 'next/head';
import React from 'react';
import { useEffect } from 'react';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import haml from 'highlight.js/lib/languages/haml';

hljs.registerLanguage('javascript', javascript);

export default function Codebox({ children }) {
  hljs.registerLanguage('javascript', javascript),
  hljs.registerLanguage('haml', haml);
  useEffect(() => {
    hljs.initHighlighting();
    }, []);

  return (
    <React.Fragment>
      <Head>
        <script>
            hljs.highlightOnLoad(); // will fire us up and highlight every code block
        </script>
      </Head>
      <div className="codebox">
        <div className="code__inner">
          <pre>
          <code className="js">
              {children}
          </code>
        </pre>
        </div>
      </div>
</React.Fragment>
  );
}
