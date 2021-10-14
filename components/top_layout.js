import Head from 'next/head';
import Footer from './footer';
import Image from 'next/image';

export default function TopLayout({ children, pageTitle, ...props }) {

  return (
    <>
    <div className="top__layout">
      <Head>
        <title>{pageTitle}</title>
      </Head>
        <main>{children}</main>
        </div>
  </>

  );
}
