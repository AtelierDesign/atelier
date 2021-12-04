import Router from 'next/router';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    Router.replace('/soon');
  });

  return null;
};

export default Home;
