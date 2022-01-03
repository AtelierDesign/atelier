import Router from 'next/router';
import { Box, box } from 'design-system/box';
import { AppProps } from 'next/app';

// MAGIC LABS
import { magic } from '../lib/magic';
import { useState, useEffect } from 'react';
import { UserContext } from '../lib/UserContext';

// STITCHES.DEV
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
  const [user, setUser] = useState();

  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then(isLoggedIn => {
      if (isLoggedIn) {
        magic.user.getMetadata().then(userData => setUser(userData));
      } else {
        Router.push('/login');
        setUser({ user: null });
      }
    });
  }, []);

  globalCss(reset, {
    'body, button': {
      backgroundColor: '$slate1',
      fontFamily: '$inter',
    },
  });

  return (
    <UserContext.Provider value={[user, setUser]}>
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
    </UserContext.Provider>
  );
};

export default App;
