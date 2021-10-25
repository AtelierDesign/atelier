import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Subscribe from '../components/subscribe';
import Section from '../components/section';
import Cta from '../components/cta';
import Footeralt from '../components/footeralt';




export default function Interval() {

  return (
<>
  <Head>
    <title>Atelier Design®</title>
  </Head>
  <Navbar />


<div className="sand__box">
  <div className="container mx-auto">
    <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">

<div className="spa__cer"></div>
    {/* FIRST */}
    <div className="w-full mb-8 md:w-full lg:w-1/2 px-2 mb-3">
      <div className="relative image__md rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
      <div className="product__svg">
      <Image src="/svg/time.svg" alt="one" width={140} height={70} />
      <p>An Adobe After Effects plugin, allowing you to add aesthetic styles + timecode displays to your projects.</p>
      </div>
        <Image
          src="https://cdn.ady.systems/assets/grid_hamilton.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Ady® Interval</div>
      <div className="scania_bodysmall">
        From $32 USD
      </div>
    </div>

    {/* SECOND */}
    <div className="w-1/2 mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="relative image__md rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
      <div className="product__svg">
        <Image src="/svg/sound.svg" alt="one" width={180} height={70} />
          <p>A dynamic pack of essential sound design to quickly enhance all types of productions.</p>
        </div>
        <Image
          src="https://cdn.ady.systems/assets/circuit_desktop.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Ady® Sound</div>
      <div className="scania_bodysmall">
        From $32 USD
      </div>
    </div>

    {/* THIRD */}
    <div className="w-1/2 mb-8 md:w-1/2 lg:w-full px-2 mb-3">
      <div className="relative image__md rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
      <div className="product__svg">
        <Image src="/svg/sound.svg" alt="one" width={180} height={70} />
          <p>A dynamic pack of essential sound design to quickly enhance all types of productions.</p>
        </div>
        <Image
          src="https://cdn.ady.systems/assets/circuit_desktop.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Ady® Sound</div>
      <div className="scania_bodysmall">
        From $32 USD
      </div>
    </div>



    </div>
  </div>
</div>
</>
 );
}
