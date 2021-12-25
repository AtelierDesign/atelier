import Head from 'next/head';
import React from 'react';

import { DropMenu } from '@components/DropMenu';
import { Demo } from '@components/Demo';
import { Box } from '@design-system/box';
import { Container } from '@design-system/container';

import 'stitches.config';

export default function Test() {
  return (
    <Box css={{ padding: '0px' }}>
      <Head>
        <title>Testing Page.</title>
      </Head>

      <Container>
        <DropMenu />
      </Container>

      <Demo />
    </Box>
  );
}
