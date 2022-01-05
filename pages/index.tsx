import Router from 'next/router';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

const Home = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    Router.replace('/test');
  });

  return null;
};

export default Home;
