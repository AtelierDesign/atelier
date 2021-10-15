import Link from "next/link";
import cn from "classnames";
import Image from "next/image";

export default function Navbar() {

  return (
    <header className="h-10 mx-0 w-screen z-9999">
      <div className="flex justify-between mt-6 mb-0 pr-4 pl-4 pb-0 text-black w-full z-10">
        <div className="scania__heading"><Link href="/">Back</Link></div>
        <a href="https://github.com/chvndler">
          <div className="svg__logo">
            <Image src="/atelier_blk.svg" alt="Atelier Design Yield®" height={30} width={140} />
          </div>
        </a>
        <div className="scania__heading">Menu</div>
      </div>
    </header>
  );
}
