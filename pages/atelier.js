import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Section from '../components/section';
import Cta from '../components/cta';
import Footeralt from '../components/footeralt';
import B2 from '../components/buttons/b2'
import BlockB2 from '../components/buttons/blockb2'

export default function Atelier() {
  return (
    <>
      <Head>
        <title>Atelier Design®</title>
      </Head>
      <Navbar />
      <Hero>
      <h1>Welcome.</h1>
        <p className="p_lg">
          An ever– expanding ecosystem of essential design components, for artists to empower the
          new culture of design.
        </p>
      </Hero>
      {/*PageStart*/}
      <div className="sand__box">
        <div className="container mx-auto">
          <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">
            {/*FIRST IMAGE*/}
            <div className="w-full mb-4 md:w-full lg:w-full px-2">
              <div className="relative image__lg rounded-lg bg-gray-100 text-sm text-white flex items-center justify-center">
                <div className="image__title">
                  <h2>Ady® Interval</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation.</p>
                </div>
                <Image
                  src="https://cdn.ady.systems/assets/blk.jpg"
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
                  <p>An Adobe After Effects plugin, allowing you to add aesthetic styles + timecode
                    displays to your projects.
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
                    A dynamic pack of essential sound design to quickly enhance all types of
                    productions.
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
        <B2>
          <Link href="/new">
          <a>Shop All Products</a>
          </Link>
        </B2>
      </Cta>

      {/*SECTION 001*/}
      <Section>
        <h6>ATELIER®</h6>
        <p>
          <strong>This is a section, you can put whatever the hell you want here.</strong>
        </p>
        <BlockB2>
        <Link href="/new">
          <a>Shop All Products</a>
        </Link>
        </BlockB2>
      </Section>

      <div className="spa__cer"></div>
      <Footeralt />

      {/*EOF*/}
    </>
  );
}
