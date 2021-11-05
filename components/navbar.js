import Link from 'next/link';
import Image from 'next/image';
import { Popover } from '@headlessui/react';
import { Transition } from '@headlessui/react';
import { useState } from 'react';



export default function Navbar() {
  const [isShowing, setIsShowing] = useState(false)

  return (

<header>
  <div className="h-full pt-4 pb-2 lg:pt-3 md:pt-3">
    <div className="flex items-center justify-between md:container mx-0 my-0 px-0 py-0 md:px-0">
      <div className="lg:hidden md:hidden">
        <Popover className="popover">
          <div className="popover__button items-center self-center lg:hidden md:hidden">
            <button onClick={() => setIsShowing((isShowing) => !isShowing)}>
              <Image src="/svg/menu.svg" alt="menu" width={20} height={20} />
            </button>
          </div>

          <Transition
            show={isShowing}
            enter="transition-opacity ease-in-out duration-350"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-350"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Popover.Panel className="popover__panel">
              <div className="grid grid-cols-1">

                {/*Main Navigation*/}
                <Link href="/atelier">
                  <a className="popover__link">All Products</a>
                </Link>
                <Link href="/new">
                  <a className="popover__link">New Releases</a>
                </Link>
                <Link href="https://docs.ady.world">
                  <a className="popover__link">Coming Soon</a>
                </Link>
                <Link href="https://docs.ady.world">
                  <a className="popover__link">Documentation</a>
                </Link>

                {/*Small Links*/}
                <br></br>
                <Link href="/contact">
                  <a className="popover__small__link">Contact</a>
                </Link>
                <Link href="/information">
                  <a className="popover__small__link">About</a>
                </Link>
                <Link href="/policy">
                  <a className="popover__small__link">Terms & Conditions</a>
                </Link>
                <Link href="/join">
                  <a className="popover__small__link">Subscribe</a>
                </Link>
                <Link href="https://api.ady.world" target="_blank" rel="noreffer">
                  <a className="popover__small__link">My Account</a>
                </Link>

                <div className="popover__footer">
                  <div className="popover__logo">
                    <Link href="/">
                      <a>
                        <Image
                          src="/svg/brand.svg"
                          alt="menu"
                          width={55}
                          height={20}
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="popover__copyright">
                    ©2021 ALL RIGHTS RESERVED.
                  </p>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>


      <Link href="/">
        <a className="logo__link">
          <Image src="/svg/brand.svg" alt="Atelier®" width={68} height={18} />
        </a>
      </Link>

      <div className="space-x-8 xl:space-x-12 sm:flex items-center justify-between hidden md:px-0">
        <span className="text-charcoal cursor-pointer">
          <Link href="/information">
            <a className="desktop__link">About</a>
          </Link>
        </span>
        <span className="text-charcoal cursor-pointer">
          <Link href="/new">
            <a className="desktop__link">New Releases</a>
          </Link>
        </span>
        <span className="text-charcoal cursor-pointer">
          <Link href="https://docs.ady.world" rel="noreffer">
            <a className="desktop__link">Docs</a>
          </Link>
        </span>
      </div>
      <div className="flex">
        <div className="flex items-center self-center pr-3">
          <Image src="/svg/bag_light.svg" alt="bag" width={19} height={19} />
        </div>
      </div>
    </div>
  </div>
</header>

  );
}
