import { IdProvider } from '@radix-ui/react-id';
import { Box, box } from 'design-system/box';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { css, globalCss } from 'stitches.config';
import { reset } from '@styles/reset';
import '../styles.css';
import '../styles/inter.css';
import '../styles/jetbrains.css';
import '../styles/neue-plak.css';
import '../styles/neue-wide.css';

import NextNprogress from 'nextjs-progressbar';

const appWrapper = css({
  include: ['box', 'minHeightScreen'],
});

const App = ({ Component, pageProps }: AppProps) => {
  globalCss(reset, {
    'body, button': {
      backgroundColor: '$slate1',
      fontFamily: '$inter',
    },
  });

  return (
    <IdProvider>
      <Box css={{ backgroundColor: '$slate1' }}>
        <Head>
          <title>Design System</title>
          <link rel="stylesheet" href="https://develop.modulz.app/fonts/fonts.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        </Head>

        <div
          className={appWrapper({
            display: 'flex',
            flexDirection: 'column',
          })}>
          <div className={box({ flex: 1 })}>
            <NextNprogress
              color="linear-gradient(to right, #b5bdc8 0%,#828c95 36%,#28343b 100%)"
              startPosition={0.3}
              stopDelayMs={300}
              height={3}
              showOnShallow={true}
            />
            <Component {...pageProps} />
          </div>
        </div>
      </Box>
    </IdProvider>
  );
};

export default App;
