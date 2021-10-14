import Head from 'next/head';
import Footer from './footer';

export default function Layout({ children, pageTitle, ...props }) {

  return (
    <div className="top__layout">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
