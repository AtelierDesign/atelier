import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Undercover from '../components/undercover';
import Input from '../components/input';
import Footer from '../components/footer';

export default function Join() {
  return (
    <>
      <Head>
        <title>Join.</title>
      </Head>
      <Navbar />
      <div className="cover__page">


            <Input />


      </div>
      <Footer />
      <Undercover />
    </>
  );
}
