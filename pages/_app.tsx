import React, { useEffect, useState } from 'react';
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
import '../styles/inter.css';
import '../styles/jetbrains.css';
import '../styles/neue-plak.css';
import '../styles/neue-wide.css';
import '../styles.css';

// PROGRESS LOADER
import NextNprogress from 'nextjs-progressbar';

const globalStyles = globalCss({
  html: {
    overflowX: 'hidden',
  },
  body: {
    margin: 0,
    backgroundColor: '$slate1',
  },
});

const appWrapper = css({
  include: ['box', 'minHeightScreen'],
});

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  globalStyles();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  globalCss(reset, {
    body: {
      backgroundColor: '$slate1',
      fontFamily: '$inter',
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
