import Head from 'next/head';
import React from 'react';

import { Navbar } from '@components/Navbar';
// import { Demo } from '@components/Demo';
import { Box } from '@design-system/box';

import 'stitches.config';

export default function Connect() {
  return (
    <Box css={{ padding: '0px' }}>
      <Head>
        <title>Connect Wallet.</title>
      </Head>

      <Navbar />
    </Box>
  );
}
