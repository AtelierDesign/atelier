import Image from 'next/image';
import Undercover from '../components/undercover';
import Time from '../components/time';
import Head from 'next/head';
import Link from 'next/link';
import DesignSystem from '../lib/des.system.js';





export default function Design() {

  return (
<>
  <Head>
    <title>Design.System</title>
  </Head>
  <div>
  <DesignSystem />
  </div>
</>

  );
}
