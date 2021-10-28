import Image from 'next/image';
import Link from 'next/link';
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
    <h3>Welcome.</h3>
    <p>
      An ever– expanding ecosystem of essential design components, for artists
      to empower the new culture of design.
    </p>
  </Hero>
  <div className="sand__box">
    <div className="container mx-auto">
      <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">

        {/*FIRST IMAGE*/}
        <div className="w-full mb-4 md:w-full lg:w-full px-2">
          <div className="relative image__lg rounded-lg bg-gray-100 text-sm text-white flex items-center justify-center">
            <div className="image__title">
              <h2>Atelier.</h2>
            </div>
            <div className="image__sub">
            <p>Lorem Ipsum</p>
            </div>
            <Image
              src="https://cdn.ady.systems/assets/green.jpg"
              alt="One"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>

        {/*SECOND IMAGE*/}
        <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
          <div className="relative image__md rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
            <div className="product__svg">
              <Image src="/svg/time.svg" alt="one" width={140} height={70} />
              <p>
                An Adobe After Effects plugin, allowing you to add aesthetic
                styles + timecode displays to your projects.
              </p>
            </div>
            <Image
              src="https://cdn.ady.systems/assets/grey.jpg"
              alt="Two"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="caption__title">Ady® Interval</div>
          <div className="caption__description">From $32 USD</div>
        </div>

        {/*THIRD IMAGE*/}
        <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
          <div className="relative image__md rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
            <div className="product__svg">
              <Image src="/svg/sound.svg" alt="one" width={180} height={70} />
              <p>
                A dynamic pack of essential sound design to quickly enhance all
                types of productions.
              </p>
            </div>
            <Image
              src="https://cdn.ady.systems/assets/grey.jpg"
              alt="Three"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="caption__title">ADY® SOUND</div>
          <div className="caption__description">From $32 USD</div>
        </div>
      </div>
    </div>
  </div>

  {/*Call-to-Action*/}
  <Cta>
    <p>Shop All Products</p>
    <button className="bg-pewter border-1 border-lime hover:bg-gray-600 text-white font-bold w-1/2 mt-5 py-2 px-4 rounded-sm">
      Shop all products
    </button>
  </Cta>

  {/*SECTION 001*/}
  <Section>
      <h1>This is a Section.</h1>
  </Section>

  {/*Email Subscribe*/}
  <Subscribe />
  <div className="spa__cer"></div>
  <Footeralt />
</>

  );
}
