import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Subscribe from '../components/subscribe';
import Section from '../components/section';
import Cta from '../components/cta';
import Footeralt from '../components/footeralt';




export default function Information() {

  return (
<>
  <Head>
    <title>Information.</title>
  </Head>
  <Navbar />

    <Hero>
      <Image src="/svg/we_are.svg" alt="menu" className="we__are" width={220} height={110} />
      <h4>ATELIER DESIGN YIELD</h4>
    </Hero>

    {/*Subscribe*/}
    <Subscribe />
    <div className="spa__cer"></div>
    <Footeralt />

</>


  );
}
