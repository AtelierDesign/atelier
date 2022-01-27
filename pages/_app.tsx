import React from 'react';
import Head from 'next/head';
import { Box, box } from '@atelier/box';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useTheme } from 'next-themes';
import { ThemeProvider } from 'next-themes';

// STITCHES.DEV
import { css, globalCss, darkTheme } from 'stitches.config';
import { reset } from '@styles/reset';

// MAIN STYLE IMPORTS
import '@styles/inter.css';
import '@styles/jetbrains.css';
import '@styles/neue-plak.css';
import '@styles/neue-wide.css';
import '../styles.css';

// PROGRESS LOADER
import NextNprogress from 'nextjs-progressbar';

const appWrapper = css({
  include: ['box', 'minHeightScreen'],
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  globalCss(reset, {
    html: {
      overflowX: 'hidden',
      backgroundColor: '$slate1',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      margin: 0,
      fontFamily: '$inter',
      backgroundColor: '$slate1',
      height: '100vh',

      // iOS MOBILE VIEWPORT FIX
      minHeight: '-webkit-fill-available',
    },
  });

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: 'light-theme', dark: darkTheme.className }}
      defaultTheme="system">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
      </Head>

      <Box css={{ backgroundColor: '$slate1' }}>
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
    </ThemeProvider>
  );
};

export default App;
