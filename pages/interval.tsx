import Head from 'next/head';
import React from 'react';

import { Box } from '@design-system/box';
import { NavbarSticky } from '@components/NavbarSticky';

const Interval = () => {
  return (
    <Box css={{ bc: '$slate1', overflow: 'auto', height: '100vh' }}>
      <Head>
        <title>Interval.</title>
      </Head>

      <NavbarSticky />
    </Box>
  );
};

export default Interval;
