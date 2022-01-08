// REACT + NEXT IMPORTS
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// ATELIER DESIGN SYSTEM IMPORTS
import { Box } from '@design-system/box';
import { Text } from '@design-system/text';
import { Navbar } from '@components/Navbar';
import { Hero } from '@components/Hero';
import { FooterMain } from '@components/FooterMain';
import btrfly from '../public/img/btrfly_g.jpg';

// STITCH IMPORTS
import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '100vh',
  backgroundColor: '$light50',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  opacity: '0.9',
  backdropFilter: 'invert(10%) blur(10px)',
  saturate: '600%',

  overflowY: 'hidden',
  overflowX: 'hidden',
});

const BarSection = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '400px',
  backgroundColor: '$slate1',
  display: 'block',
  position: 'relative',
  margin: '0',
  padding: '0',

  borderTopLeftRadius: '80px',
  borderTopRightRadius: '80px',
});

// APP BEGIN / HOMEPAGE
const AdyIndex = () => {
  return (
    <>
      <Box
        css={{
          padding: '0px',
          height: '100vh',
          zIndex: '0',
          // overflowY: 'hidden',
          // overflowX: 'hidden',
          backgroundColor: 'transparent',
          zIndex: '0',
        }}>
        <CoverBox>
          <Head>
            <title>Atelier®</title>
          </Head>

          <Box>
            {/* <!-- NAVBAR, HERO --> */}
            <Navbar />
            <Hero />
          </Box>

          <BarSection></BarSection>
        </CoverBox>

        <FooterMain />
        <Image src={btrfly} alt="One" layout="fill" objectFit="cover" />
      </Box>
    </>
  );
};

export default AdyIndex;
