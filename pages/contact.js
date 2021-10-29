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

      <Section>
        <div className="center__div">
          <h4 className="section__title">SUPPORT.</h4>
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

      <Help>
        <div className="tab__group">
          <Tab.Group>
            <Tab.List>
              <div className="tab__navbar flex justify-center">
                <Tab className="tab__button bg-drey-light text-white font-bold w-1/2 rounded-sm">
                  Faq
                </Tab>
                <Tab className="tab__button bg-drey-light text-white font-bold w-1/2 rounded-sm">
                  Sales Support
                </Tab>
                <Tab className="tab__button bg-drey-light text-white font-bold w-1/2 rounded-sm">
                  Terms
                </Tab>
              </div>
            </Tab.List>

            <Tab.Panels className="tab__panels">
              <Tab.Panel className="tab__content">Faq</Tab.Panel>
              <Tab.Panel className="tab__content">Sales Support</Tab.Panel>
              <Tab.Panel className="tab__content">Terms</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </Help>
    </>
  );
}
