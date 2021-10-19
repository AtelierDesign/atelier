import Image from 'next/image';
import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Hero from '../components/hero';

export default function Index() {

  return (
<>
    <Navbar />
    <Hero />
      <div className="crater">
    <div className="container mx-auto">
      <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">
        {/* Image Row #1 */} {/* FIRST IMAGE */}
        <div className="w-full mb-8 md:w-full lg:w-full px-2">
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
      </div>



    </div>
  </div>
</>


  );
}
