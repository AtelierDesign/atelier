import React from 'react';

import { Box } from '@atelier/box';
import { DropdownNavigation } from '@components/Function/DropdownNavigation';
import { ThreeTabs } from '@components/Function/ThreeTabs';

// STYLED STITCHES
import { styled } from '@stitches/react';

export default function Test() {
  return (
    <>
      <Box css={{ height: '100vh', width: '100vw' }}>
        <DropdownNavigation />
      </Box>
    </>
  );
}
