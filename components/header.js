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
</nav>

{/* <!-- /.nav-list nav-list-larger -->  */}
   <div className="navlist__larger">
      <ul className="navlist__larger">
        <li className="nav-item">
          <Link className="nav-link nav-link-logo" href="/">
            <a>Link</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="https://apple.com" className="nav-link">
            <a>Link 4</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="https://apple.com" className="nav-link">
            <a>Link 4</a>
          </Link>
        </li>

        <li className="nav-item" className="nav-link">
          <Link href="https://apple.com">
            <a>Link 4</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="https://apple.com">
            <a className="nav-link">Link 4</a>
          </Link>
        </li>
      </ul>
    </div>>
  </div>
</header>
</>

 );
}
