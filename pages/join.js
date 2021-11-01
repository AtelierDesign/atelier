import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Undercover from '../components/undercover';
import Subscribe from '../components/subscribe';
import Footer from '../components/footer';

export default function Join() {
  return (
    <>
      <Head>
        <title>Join.</title>
      </Head>
      <Navbar />
      <div className="cover__page">
        <Subscribe />
      </div>
      <Footer />
      <Undercover />
    </>
  );
}
