import Image from 'next/image';
import Undercover from '../components/undercover';
import Time from '../components/time';
import Head from 'next/head';
import Link from 'next/link';
import Footer from '../components/footer';





export default function Index() {

  return (
<>
  <Head>
    <title>Atelier®</title>
  </Head>
  <div className="cover__page">
    <Time />
    <div className="center__div">
      <Link href="https://github.com/AtelierDesign">
      <a>
        <Image src="/svg/brand.svg" alt="menu" width={100} height={50} />
      </a>
      </Link>
    </div>
    <Footer />
  </div>
  <Undercover />
  </>

  );
}
