import Link from 'next/link';
import Image from 'next/image';




export default function Navbar() {

  return (
<header>
  <div className="bar">
    <div className="h-full pt-4">
      <div className="flex items-center justify-between md:container mx-auto my-0 pl-6 pr-6 md:px-0">
    <Image src="/svg/menu.svg" alt="bag" width={24} height={24} />
        <h1 className="text-3xl text-white sm:hidden">Atelier Design</h1>
        <div className="space-x-8 xl:space-x-12 sm:flex items-center justify-between hidden md:px-0">
          <span className="text-xl text-white font-semibold cursor-pointer">
            New Releases
          </span>
          <span className="text-xl text-white font-semibold cursor-pointer">
            About
          </span>
          <span className="text-xl text-white font-semibold cursor-pointer">
            Documentaion
          </span>
        </div>
        <div className="flex">
          <div className="flex items-center">
                <Image src="/svg/bag_light.svg" alt="bag" width={20} height={20} />

          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  );
}
