import Image from "next/image";
import Navbar from '../components/navbar';

export default function Atelier() {
  return (
    <>
<Navbar />
<div className="crater">
  <div className="flex flex-wrap -mx-0 mb-0 mt-12 z-20 bg-transparent z-8">
  {/* Image Row #1 */}
  {/* FIRST IMAGE */}
    <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-3">
      <div className="relative rounded-lg bg-gray-100 h-96 text-sm text-grey-dark flex items-center justify-center lg:h-96 md:h-80">
        <Image
          src="https://cdn.hldtru.space/atelier/images/original_c8a8465329a01c1f6731399931549652.gif"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg backdrop-filter backdrop-blur-lg"
        />
      </div>
      <div className="scania_body">Days of truth</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* SECOND IMAGE */}
    <div className="w-full md:w-1/2 lg:w-1/4 px-2 mb-3">
      <div className="relative rounded-lg bg-gray-100 h-96 text-sm text-grey-dark flex items-center justify-center lg:h-96 md:h-80">
        <Image
          src="https://cdn.hldtru.space/atelier/images/original_125d3657210d90ea7684814193c479bc.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">V2 Training</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* THIRD IMAGE */}
    <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="relative rounded-lg bg-gray-100 h-80 text-sm text-grey-dark flex items-center justify-center lg:h-96 md:h-80">
        <Image
          src="https://cdn.hldtru.space/atelier/images/original_0dde2355f1475b69c3764f1bf79b6204.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Copenhagen® Racing</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* FOURTH IMAGE */}
    <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="relative rounded-lg bg-gray-100 h-80 text-sm text-grey-dark flex items-center justify-center lg:h-96 md:h-80">
        <Image
          src="https://cdn.hldtru.space/atelier/images/original_c8a8465329a01c1f6731399931549652.gif"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Collection ©2021</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* FIFTH IMAGE */}
    <div className="w-full md:w-1/2 lg:w-1/2 px-2 mb-3">
      <div className="relative rounded-lg bg-gray-100 h-80 text-sm text-grey-dark flex items-center justify-center lg:h-96 md:h-80">
        <Image
          src="https://cdn.hldtru.space/atelier/images/original_195918ca6f895e140532c2def0b7c622.jpg"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Collection ©2021</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* SIX IMAGE */}
    <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-3">
      <div className="relative rounded-lg bg-gray-100 h-80 text-sm text-grey-dark flex items-center justify-center lg:h-96 md:h-80">
        <Image
          src="https://cdn.hldtru.space/atelier/images/original_536d8209b93f1ee1002eabe3b4527c43.gif"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Collection ©2021</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>

    {/* SIEVEN IMAGE */}
    <div className="w-full md:w-1/2 lg:w-2/3 px-2 mb-3">
      <div className="relative rounded-lg bg-gray-100 h-80 text-sm text-grey-dark flex items-center justify-center lg:h-96 md:h-80">
        <Image
          src="https://cdn.hldtru.space/atelier/images/original_c8a8465329a01c1f6731399931549652.gif"
          alt="one"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="scania_body">Collection ©2021</div>
      <div className="scania_bodysmall">Brand Identity, Website Design, System, Video</div>
    </div>
  </div>








  <div className="bg-transparent h-20"></div>
</div>
</>
  );
}
