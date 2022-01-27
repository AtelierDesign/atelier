/*
 *  [ ATELIER DESIGN YIELD® ]
 *  2022-01-06
 *  All Rights Reserved.
 *  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 *  See http://developer.ady.world/ for more information.
 */

// React & Next.js Imports
import router from 'next/router';
import { useRouter } from 'next/router';
import { useState, useEffect, useContext } from 'react';

// next-theme
import { useTheme } from 'next-themes';

const Index = () => {
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  // Redirect to /cover
  useEffect(() => {
    router.replace('/cover');
  });

  return null;
};

export default Index;
