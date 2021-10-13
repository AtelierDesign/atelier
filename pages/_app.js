import Head from 'next/head';
import '../styles/index.scss';

export default function App({ Component, pageProps }) {
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
