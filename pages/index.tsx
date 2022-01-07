//  ATELIER DESIGN YIELD®
//  2022-01-06
//  All Rights Reserved.
//  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
//  See http://developer.ady.world/ for more information.

import router from 'next/router';
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';
import { useTheme } from 'next-themes';

// MAGIC LABS
import { magic } from '@lib/magic';
import { UserContext } from '@lib/UserContext';

const Home = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useContext(UserContext);

  // DETERMINE WHETHER USER IS LOGGED IN OR NOT / ON FIRST LOAD
  useEffect(() => {
    setUser({ loading: true });
    magic.user.isLoggedIn().then(isLoggedIn => {
      if (isLoggedIn) {
        magic.user.getMetadata().then(userData => setUser(userData));
      } else {
        // router.push('/login'); // IF NOT LOGGED IN PUSH TO LOGIN
        setUser({ user: null });
      }
    });
  }, []);

  // REDIRECT TO COVERPAGE
  useEffect(() => {
    router.replace('/cover');
  });

  return null;
};

export default Home;
