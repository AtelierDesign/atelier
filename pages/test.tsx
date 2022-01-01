import Head from 'next/head';
import React from 'react';

import { Navbar } from '@components/Navbar';
import { Subscribe } from '@components/zaps/Subscribe';
import { Container } from '@design-system/container';
import { Box } from '@design-system/box';

import 'stitches.config';

export default function Test() {
  return (
    <Box css={{ padding: '0px' }}>
      <Head>
        <title>Testing Page.</title>
      </Head>

      <Navbar />

      <Container size="2">
        <Subscribe />
      </Container>
    </Box>
  );
}
