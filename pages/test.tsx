import React from 'react';

import { Box } from '@atelier/box';
import { NavbarSticky } from '@components/NavbarSticky';

// STYLED STITCHES
import { styled } from '@stitches/react';

export default function Test() {
  return (
    <>
      <Box css={{ height: '100vh', width: '100vw' }}>
        <NavbarSticky />
      </Box>
    </>
  );
}
