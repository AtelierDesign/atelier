import Image from 'next/image';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Subscribe from '../components/subscribe';
import Footeralt from '../components/footeralt';




export default function Atelier() {

  return (
<>
<Navbar />
<Hero />
<div className="sand__box">
  <div className="container mx-auto">
    <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">
      {/* Image Row #1 */} {/* FIRST IMAGE */}
      <div className="w-full mb-4 md:w-full lg:w-full px-2">
        <div className="relative image__lg rounded-lg bg-gray-100 text-sm text-white flex items-center justify-center">
          <div className="image__title">Atelier Design Yield.</div>
          <div className="image__sub">Lorem Ipsum</div>
          <video className="video__product" playsInline autoPlay muted loop crossOrigin="true">
            <source src="/mp4/flow_purple.mp4" type="video/mp4" />
          </video>

        </div>
      </div>

      {/* SECOND IMAGE */}
      <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
        <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
        <div className="product__svg">
        <Image src="/svg/time.svg" alt="one" width={140} height={70} />
        <p>An Adobe After Effects plugin, allowing you to add aesthetic styles + timecode displays to your projects.</p>
        </div>
          <Image
            src="https://cdn.ady.systems/assets/panel.jpg"
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

      {/* THIRD IMAGE */}
      <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
        <div className="relative image__sm rounded-lg bg-gray text-sm text-grey-dark flex items-center justify-center">
        <div className="product__svg">
        <Image src="/svg/sound.svg" alt="one" width={180} height={70} />
                <p>A dynamic pack of essential sound design to quickly enhance all types of productions.</p>
        </div>
          <Image
            src="https://cdn.ady.systems/assets/grey.jpg"
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

      {/* FOURTH IMAGE */}
      <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
        <div className="relative image__sm rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
          <Image
            src="https://cdn.ady.systems/assets/grey.jpg"
            alt="one"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="scania_body">Product _ 002</div>
        <div className="scania_bodysmall">
          Brand Identity, Website Design, System, Video
        </div>
      </div>

      {/* FIFTH IMAGE */}
      <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
        <div className="relative image__sm rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
          <Image
            src="https://cdn.ady.systems/assets/blk.jpg"
            alt="one"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="scania_body">Product _ 002</div>
        <div className="scania_bodysmall">
          Brand Identity, Website Design, System, Video
        </div>

      </div>
    </div>
  </div>
</div>

  {/*Email Subscribe*/}
  <Subscribe />
  <div className="spa__cer"></div>
  <Footeralt />

</>

  );
}
