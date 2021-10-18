import Image from "next/image";
import Navbar from '../components/navbar';

export default function Atelier() {
  return (
    <>
<Navbar />
<div className="crater">
  <div className="flex flex-wrap h-auto -mx-0 mb-0 mt-6 z-20 bg-transparent z-8">
  {/* Image Row #1 */}
  {/* FIRST IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/4 px-2">
      <div className="relative image__height border-2 rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image
          src="https://d37ni96g2zvg5.cloudfront.net/assets/placeholder.png"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Product _ 001</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* SECOND IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/4 px-2 mb-3">
      <div className="relative image__height border-2 rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image
          src="https://d37ni96g2zvg5.cloudfront.net/assets/placeholder.png"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Product _ 002</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* THIRD IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="image__height relative border-2 rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image
          src="https://d37ni96g2zvg5.cloudfront.net/assets/placeholder.png"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Product _ 003</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* FOURTH IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="image__height relative border-2 rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image
          src="https://d37ni96g2zvg5.cloudfront.net/assets/placeholder.png"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Product _ 004</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* FIFTH IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="image__height relative border-2 rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image
          src="https://d37ni96g2zvg5.cloudfront.net/assets/placeholder.png"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Product _ 005</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* SIX IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-1/3 px-2 mb-3">
      <div className="image__height relative border-2 rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image
          src="https://d37ni96g2zvg5.cloudfront.net/assets/placeholder.png"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Product _ 006</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* SIEVEN IMAGE */}
    <div className="w-full mb-8 md:w-1/2 lg:w-2/3 px-2 mb-3">
      <div className="image__height relative border-2 rounded-lg bg-gray-100 text-sm text-grey-dark flex items-center justify-center">
        <Image
          src="https://d37ni96g2zvg5.cloudfront.net/assets/placeholder.png"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Product _ 007</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>
  </div>








  <div className="bg-transparent h-20"></div>
</div>
</>
  );
}