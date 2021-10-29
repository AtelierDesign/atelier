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
        <div className="center__div">
          <div className="container max-w-xl">
            <h1>SUBSCRIBE.</h1>
            <br />
            <div className="relative mx-auto">
              <input
                type="text"
                id="rounded-email"
                className="h-30 rounded-sm border-lime flex-1 appearance-none border-2 w-full py-2 px-5 bg-white text-gray-600 placeholder-gray-300 shadow-none text-xl"
                placeholder="Email address"
              />
              <button className="bg-charcoal rounded-xs border-0 hover:bg-gray-600 text-white w-full mt-3 py-1 px-4">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Undercover />
    </>
  );
}
