import Link from 'next/link';
import Image from 'next/image';
import { Popover } from '@headlessui/react'
import { Transition } from '@headlessui/react'
import { useState } from 'react'



export default function Navbar() {
  const [isShowing, setIsShowing] = useState(false)

  return (


<header>
  <div className="h-full pt-3 lg:pt-5 md:pt-5">
    <div className="flex items-center justify-between md:container mx-auto my-0 px-0 py-0 md:px-0">
      <div className="lg:hidden md:hidden">
        <Popover className="popover">
          <div className="popover__button lg:hidden md:hidden">
          <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
            <Image src="/svg/menu.svg" alt="menu" width={20} height={20} />
          </button>
          </div>

          <Transition
            show={isShowing}
            enter="transition-opacity duration-350"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-350"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >

          <Popover.Panel className="popover__panel">
            <div className="grid grid-cols-1">
              <a className="popover__link" href="/analytics">
                Webstore
              </a>
              <a className="popover__link" href="/engagement">
                Documentation
              </a>
              <a className="popover__link" href="/security">
                Information
              </a>
              <a className="popover__link" href="/integrations">
                Terms & Conditions
              </a>
              <a className="popover__link" href="/analytics">
                My Account
              </a>

              <div className="popover__footer">
                <div className="popover__logo">
                  <Image src="/svg/brand.svg" alt="menu" width={50} height={20} />
                </div>
                <p className="popover__copyright">©2021. All Rights Reserved.</p>
              </div>

            </div>
          </Popover.Panel>
          </Transition>
        </Popover>
      </div>

      <Image src="/svg/brand.svg" alt="menu" width={78} height={18} />
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
