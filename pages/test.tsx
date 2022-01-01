import Head from 'next/head';
import React from 'react';

import { Navbar } from '@components/Navbar';
// import { Subscribe } from '@components/zaps/Subscribe';
import { Subs } from '@components/zaps/Subs';
import { Container } from '@design-system/container';
import { Box } from '@design-system/box';

import { styled } from 'stitches.config';

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

export default function Test() {
  return (
    <Box css={{ padding: '0px' }}>
      <Head>
        <title>Testing Page.</title>
      </Head>

      <Navbar />
      <CoverBox>
        <Container size="2">
          {/* <Subscribe /> */}
          <Subs />
        </Container>
      </CoverBox>
    </Box>
  );
}
