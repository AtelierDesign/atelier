import Head from 'next/head';
import React from 'react';

import { Navbar } from '@components/Navbar';
import { FreeSample } from '@components/zaps/FreeSample';
import { Container } from '@design-system/container';
import { Box } from '@design-system/box';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
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

export default function Fsp() {
  return (
    <Box css={{ padding: '0px' }}>
      <Head>
        <title>Free Sample Pack.</title>
      </Head>

      <Navbar />

      <CoverBox>
        <Container size="2">
          <FreeSample />
        </Container>
      </CoverBox>
    </Box>
  );
}
