import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Subscribe from '../components/subscribe';
import Section from '../components/section';
import Help from '../components/help';
import Cta from '../components/cta';
import Footeralt from '../components/footeralt';

import { Tab } from '@headlessui/react';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact.</title>
      </Head>
      <Navbar />

      <form>
        <h1>Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label for="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
    </>
  );
}
