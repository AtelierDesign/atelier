import Link from 'next/link';
import Image from 'next/image';





export default function Navbar() {

  return (
<header>
  <div className="bar">
    <div className="h-full pt-4">
      <div className="flex items-center justify-between md:container mx-auto my-0 px-4 py-0 md:px-0">
        <Image className="h-10" src="/svg/logo__light.svg" width={10} height={10} alt="Atelier®" />
        <h1 className="text-3xl text-white sm:hidden">Atelier</h1>
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
            <div className="relative ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-700 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

  );
}
