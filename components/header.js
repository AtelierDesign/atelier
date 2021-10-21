import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';


export default function Header() {

  return (
<>
<header>

  <div className="bar">
    <nav>
      {/*
      <!-- /.nav-list nav-list-mobile -->*/}
      <ul className="navlist__mobile">
        <li className="nav-item">
          <div className="mobile-menu">
            <span className="line line-top"></span>
            <span className="line line-bottom"></span>
          </div>
        </li>
        <li className="nav-item">
          <Link href="/welcome">
          <a className="nav-link nav-link-logo"></a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="https://hldtru.com">
          <a className="nav-link nav-link-bag"></a>
          </Link>
        </li>
      </ul>


      {/*
      <!-- /.nav-list nav-list-larger -->*/}

      <div className="navlist__larger w-full">
        <div className="flex h-full w-full pt-4">
          <div className="flex-grow h-16 text-left">
            Menu
          </div>
          <div className="flex-grow-0 h-16 text-center">
            <Image src="/svg/logo__alt.svg" alt="Logo" width={30} height={26}></Image>
          </div>
          <div className="flex-grow h-16 text-right">
            Store
          </div>
        </div>
      </div>
    </nav>
  </div>

</header>
</>

 );
}
