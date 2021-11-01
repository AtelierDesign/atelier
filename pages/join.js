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
        <script type="text/javascript" async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WiNjPw"></script>
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
