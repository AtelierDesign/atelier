import Head from 'next/head';
import Header from './Header';

const MagicLayout = props => (
  <>
    <Head>
      <title>Magic</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <main>
      <div className="magic-container">{props.children}</div>
    </main>
  </>
);

export default Layout;
