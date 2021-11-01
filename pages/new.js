import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import HeroSmall from '../components/herosmall';
import Section from '../components/section';
import Cta from '../components/cta';
import B1 from '../components/buttons/b1'
import Footeralt from '../components/footeralt';


export default function New() {
  return (
    <>
      <Head>
        <title>New Releases.</title>
      </Head>
      <Navbar />
      <HeroSmall>
        <h3>New Releases.</h3>
      </HeroSmall>
      <div className="sand__box">
        <div className="container mx-auto">
          <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">
            {/* FIRST */}
            <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
              <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
                <div className="product__svg">
                  <Image src="/svg/time.svg" alt="one" width={140} height={70} />
                  <p>
                    An Adobe After Effects plugin, allowing you to add aesthetic styles + timecode
                    displays to your projects.
                  </p>
                </div>
                <Image
                  src="https://cdn.ady.systems/assets/grid_hamilton.jpg"
                  alt="one"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="caption__title">Ady® Interval</div>
              <div className="caption__description">From $32 USD</div>
            </div>

            {/* SECOND */}
            <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
              <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
                <div className="product__svg">
                  <Image src="/svg/sound.svg" alt="one" width={180} height={70} />
                  <p>
                    A dynamic pack of essential sound design to quickly enhance all types of
                    productions.
                  </p>
                </div>
                <Image
                  src="https://cdn.ady.systems/assets/circuit_desktop.jpg"
                  alt="one"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="caption__title">Ady® Sound</div>
              <div className="caption__description">From $32 USD</div>
            </div>

            {/* THIRD */}
            <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
              <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
                <div className="product__svg">
                  <Image src="/svg/sound.svg" alt="one" width={180} height={70} />
                  <p>
                    A dynamic pack of essential sound design to quickly enhance all types of
                    productions.
                  </p>
                </div>
                <Image
                  src="https://cdn.ady.systems/assets/title_promo02.jpg"
                  alt="one"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="caption__title">Ady® Sound</div>
              <div className="caption__description">From $32 USD</div>
            </div>

            {/* FOURTH */}
            <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
              <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
                <div className="product__svg">
                  <Image src="/svg/sound.svg" alt="one" width={180} height={70} />
                  <p>
                    A dynamic pack of essential sound design to quickly enhance all types of
                    productions.
                  </p>
                </div>
                <Image
                  src="https://cdn.ady.systems/assets/ady.jpg"
                  alt="one"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="caption__title">Ady® Sound</div>
              <div className="caption__description">From $32 USD</div>
            </div>
          </div>
        </div>
      </div>

      {/*Call-To-Action*/}
      <Cta>
        <p>Shop All Products</p>
        <B1>
          <Link href="/new">
          <a>Shop All Products</a>
          </Link>
        </B1>
      </Cta>

      {/*SECTION 001*/}
      <Section>
        <div className="section__home">
          <h2>This is a Section.</h2>
        </div>
        </Section>

      <div className="spa__cer"></div>
      <Footeralt />
    </>
  );
}
