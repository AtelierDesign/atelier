import Head from 'next/head';
import '../styles/index.scss';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const Viewport = styled.div`
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
`;

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
   let vh = window.innerHeight * 0.01;
   document.documentElement.style.setProperty('--vh', `${vh}px`);
}, []);

  return (
  <>
  <Head>
    <meta charSet="UTF-8" />
    <meta name="description" content="Atelier Design Yield - Website" />
    <meta name="viewport" content="initial-scale=1, width=device-width, user-scalable=no" />
  </Head>
    <Component {...pageProps} />
  </>
  );
}
