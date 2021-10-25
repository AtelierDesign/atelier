import Head from 'next/head';
import Footer from './footer';

export default function Product({ children, pageTitle, ...props }) {

  return (
<div className="product__page">
  <Head>
    <title>{pageTitle}</title>
  </Head>
  <main>{children}</main>
  <Footer />
</div>

  );
}
