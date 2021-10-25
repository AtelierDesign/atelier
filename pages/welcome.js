import Image from 'next/image';
import Cover from '../components/cover';
import Time from '../components/time';
import Head from 'next/head';





export default function Welcome() {
  return (
<>
  <Head>
    <title>Welcome.</title>
  </Head>
  <Cover>
    <Time />
    <div className="center__div">
      <Image src="/svg/brand.svg" alt="menu" width={100} height={50} />
    </div>
  </Cover>
</>

  );
}
