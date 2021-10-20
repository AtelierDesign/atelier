import Image from "next/image";
import Hero from '../components/hero';

export default function Atelier() {
  return (
<>
<div className="crater">
  <Hero />
  <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">
    {/* Image Row #1 */} {/* FIRST IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/4 px-2">
      <div className="relative image__height rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image src="https://cdn.ady.systems/assets/44.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="scania_body">Product _ 001</div>
      <div className="scania_bodysmall">
        Brand Identity, Website Design, System, Video
      </div>
    </div>

    {/* SECOND IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/4 px-2 mb-3">
      <div className="relative image__height rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image src="https://cdn.ady.systems/assets/vhvh.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="scania_body">Product _ 002</div>
      <div className="scania_bodysmall">
        Brand Identity, Website Design, System, Video
      </div>
    </div>

    {/* THIRD IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="image__height relative rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image src="https://cdn.ady.systems/assets/999.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="scania_body">Product _ 003</div>
      <div className="scania_bodysmall">
        Brand Identity, Website Design, System, Video
      </div>
    </div>

    {/* FOURTH IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="image__height relative rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image src="https://cdn.ady.systems/assets/55.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="scania_body">Product _ 004</div>
      <div className="scania_bodysmall">
        Brand Identity, Website Design, System, Video
      </div>
    </div>

    {/* FIFTH IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="image__height relative rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image src="https://cdn.ady.systems/assets/000.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="scania_body">Product _ 005</div>
      <div className="scania_bodysmall">
        Brand Identity, Website Design, System, Video
      </div>
    </div>

    {/* SIX IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/3 px-2 mb-3">
      <div className="image__height relative rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image src="https://cdn.ady.systems/assets/kkkkkn.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="scania_body">Product _ 006</div>
      <div className="scania_bodysmall">
        Brand Identity, Website Design, System, Video
      </div>
    </div>

    {/* SIEVEN IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-2/3 px-2 mb-3">
      <div className="image__height relative rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image src="https://cdn.ady.systems/assets/vhvh.jpg" alt="one" layout="fill" objectFit="cover" className="rounded-lg" />
      </div>
      <div className="scania_body">Product _ 007</div>
      <div className="scania_bodysmall">
        Brand Identity, Website Design, System, Video
      </div>
    </div>
  </div>

  <div className="bg-transparent h-20"></div>
</div>
</>

  );
}
