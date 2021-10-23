import Link from 'next/link';
import Image from 'next/image';





export default function Navbar() {

  return (

<header>
  <div className="bar">
    <div className="h-full pt-3 lg:pt-5 md:pt-5">
      <div className="flex items-center justify-between md:container mx-auto my-0 pl-6 pr-6 md:px-0">
        <div className="lg:hidden md:hidden">
          <Image src="/svg/menu.svg" alt="menu" width={20} height={20} />
        </div>
        <Image src="/svg/brand.svg" alt="menu" width={78} height={20} />
        <div className="space-x-8 xl:space-x-12 sm:flex items-center justify-between hidden md:px-0">
          <span className="text-xl text-charcoal font-semibold cursor-pointer">
            New Releases
          </span>
          <span className="text-xl text-charcoal font-semibold cursor-pointer">
            About
          </span>
          <span className="text-xl text-charcoal font-semibold cursor-pointer">
            Documentation
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
