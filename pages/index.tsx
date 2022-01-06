import Router from 'next/router';
import { useEffect } from 'react';
import { useTheme } from 'next-themes';

const Home = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    Router.replace('/cover');
  });

  return null;
};

export default Home;
