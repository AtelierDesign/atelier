import Image from 'next/image';
import Layout from '../components/layout';
import Header from '../components/header';
import Hero from '../components/hero';

export default function Welcome() {

  return (
<>
    <Header />
      <Hero />
      <div className="crater">
    <div className="container mx-auto">
      <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">
        {/* Image Row #1 */} {/* FIRST IMAGE */}
        <div className="w-full mb-4 md:w-full lg:w-full px-2">
          <div className="relative image__height rounded-lg bg-gray-100 text-sm text-white flex items-center justify-center">
            <div className="image__overtext">Atelier Design Yield.</div>
            <Image
              src="https://cdn.ady.systems/assets/blk.jpg"
              alt="one"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>


        {/* SECOND IMAGE */}
        <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
          <div className="relative image__height rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
            <Image src="https://cdn.ady.systems/assets/blk.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="scania_body">Product _ 002</div>
          <div className="scania_bodysmall">
            Brand Identity, Website Design, System, Video
          </div>
        </div>

        {/* THIRD IMAGE */}
        <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
          <div className="relative image__height rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
            <Image src="https://cdn.ady.systems/assets/blk.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
          </div>
          <div className="scania_body">Product _ 002</div>
          <div className="scania_bodysmall">
            Brand Identity, Website Design, System, Video
          </div>
        </div>
      </div>
    </div>
  </div>

</>


  );
}
