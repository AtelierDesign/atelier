import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Subscribe from '../components/subscribe';
import Section from '../components/section';
import Cta from '../components/cta';
import Footeralt from '../components/footeralt';




export default function Atelier() {

  return (
<>
<Head>
<title>Atelier Design®</title>
</Head>
<Navbar />
<Hero>
<h3>New.</h3>
 </Hero>
<div className="sand__box">
  <div className="container mx-auto">
    <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">



      {/* FIRST */}
      <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
        <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
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
      <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
        <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
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
      <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
        <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
        <div className="product__svg">
          <Image src="/svg/sound.svg" alt="one" width={180} height={70} />
            <p>A dynamic pack of essential sound design to quickly enhance all types of productions.</p>
          </div>
          <Image
            src="https://cdn.ady.systems/assets/title_promo02.jpg"
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

      {/* FOURTH */}
      <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
        <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
        <div className="product__svg">
          <Image src="/svg/sound.svg" alt="one" width={180} height={70} />
            <p>A dynamic pack of essential sound design to quickly enhance all types of productions.</p>
          </div>
          <Image
            src="https://cdn.ady.systems/assets/ady.jpg"
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


{/*CTA 001*/}
<Cta>
  <p>Shop All Products</p>
  <button className="bg-drey-light border-1 border-lime hover:bg-gray-600 text-white font-bold w-1/2 mt-5 py-2 px-4 rounded-sm">
    Shop all products
    </button>
</Cta>



{/*SECTION 001*/}
<Section>
  <div className="section__home">
  <h2>This is a Section.</h2>
  </div>
</Section>




  {/*Email Subscribe*/}
  <Subscribe />

  <div className="spa__cer"></div>

  <Footeralt />

</>

  );
}