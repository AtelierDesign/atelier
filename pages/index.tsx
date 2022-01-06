//  ATELIER DESIGN YIELD®
//  2022-01-06
//  All Rights Reserved.
//  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
//  See http://developer.ady.world/ for more information.

import Router from 'next/router';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

const Home = () => {
  const { theme, setTheme } = useTheme();

  // REDIRECT TO COVERPAGE
  useEffect(() => {
    Router.replace('/cover');
  });

  return null;
};

export default Home;
