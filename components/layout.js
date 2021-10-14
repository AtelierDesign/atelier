import Head from 'next/head';
import Footer from './footer';
import Header from './header';

export default function Layout({ children, pageTitle, ...props }) {

  return (
    <div className="layout">
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <main>{children}</main>
      <Footer />
    </div>
  );
}
