import Head from 'next/head';
import React from 'react';

import { Demo } from '@components/Demo';
import { Box } from '@design-system/box';

import 'stitches.config';

export default function Test() {
  return (
    <Box css={{ padding: '0px' }}>
      <Head>
        <title>Testing Page.</title>
      </Head>

      <Demo />
    </Box>
  );
}
