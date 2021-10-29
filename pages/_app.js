import Head from 'next/head';
import { useCreateStore, Provider } from '../lib/store';
import '../styles/index.scss';

export default function App({ Component, pageProps }) {
  const createStore = useCreateStore(pageProps.initialZustandState);

  return (
    <Provider createStore={createStore}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Atelier Design Yield - Website" />
        <meta name="viewport" content="initial-scale=1, width=device-width, user-scalable=no" />
        <meta property="og:image" content="https://cdn.ady.systems/assets/social.jpg" />
        <meta property="og:image:secure_url" content="https://cdn.ady.systems/assets/social.jpg" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
