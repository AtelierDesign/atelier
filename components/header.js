import Link from 'next/link'
import React, { useState } from 'react';


export default function Header() {

  return (
<>
<header>
  <div className="bar">
    <nav>
    {/* <!-- /.nav-list nav-list-mobile -->  */}
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


{/* <!-- /.nav-list nav-list-larger -->  */}

      <ul className="navlist__larger"></ul>
    </nav>
  </div>
</header>
</>

 );
}
