import React from 'react';
import Head from 'next/head';

// STITCHES
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import { Navbar } from '@components/Navbar';

import { LogoSlide } from '@components/Framework/LogoSlide';

import { styled } from '@stitches/react';

const CenterBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

const Test = () => {
  return (
    <>
      <Head>
        <title>Shop.</title>
      </Head>

      <Navbar />
      <CenterBox>
        <LogoSlide />
      </CenterBox>
    </>
  );
};

export default Test;
