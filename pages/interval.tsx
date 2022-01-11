import Head from 'next/head';
import React from 'react';

import { Box } from '@atelier/box';
import { Navbar } from '@components/Navbar';

const Interval = () => {
  return (
    <Box css={{ bc: '$slate1', overflow: 'auto', height: '100vh' }}>
      <Head>
        <title>Interval.</title>
      </Head>

      <Navbar />
    </Box>
  );
};

export default Interval;
