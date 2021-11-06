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
import HeroDark from '../components/hero/hero_dark';

import { Tab } from '@headlessui/react';

export default function Policy() {
  return (
    <>
      <Head>
        <title>Privacy.</title>
      </Head>
      <Navbar />
      <HeroDark />

      <Section>
        <div className="center__div">
          <h4 className="section__title">Privacy.</h4>
          <p>
            Please contact
            <Link href="mailto: sales@ady.world">
              <a>
                {' '}
                ( <strong> sales@ady.world </strong> ){' '}
              </a>
            </Link>
            for any questions or concerns.
          </p>
        </div>
      </Section>
    </>
  );
}
