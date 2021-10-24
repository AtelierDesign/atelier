import Link from 'next/link';
import Image from 'next/image';
import { Popover } from '@headlessui/react'



export default function Navbar() {

  return (


<header>
  <div className="h-full pt-3 lg:pt-5 md:pt-5">
    <div className="flex items-center justify-between md:container mx-auto my-0 px-0 py-0 md:px-0">
      <div className="lg:hidden md:hidden">
        <Popover className="popover">
          <Popover.Button className="popover__button lg:hidden md:hidden focus-visible:ring-white">
            <Image src="/svg/menu.svg" alt="menu" width={20} height={20} />
          </Popover.Button>

          <Popover.Panel className="popover__panel">
            <div className="grid grid-cols-1">
              <a className="popover__link" href="/analytics">
                Analytics
              </a>
              <a className="popover__link" href="/engagement">
                Engagement
              </a>
              <a className="popover__link" href="/security">
                Security
              </a>
              <a className="popover__link" href="/integrations">
                Integrations
              </a>
              <a className="popover__link" href="/analytics">
                Analytics
              </a>
            </div>
          </Popover.Panel>
        </Popover>
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
        <div className="flex items-center pr-3">
          <Image src="/svg/bag_light.svg" alt="bag" width={20} height={20} />
        </div>
      </div>
    </div>
  </div>
</header>

  );
}
