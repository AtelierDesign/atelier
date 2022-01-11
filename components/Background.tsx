import React from 'react';
import Image from 'next/image';
import { Box } from '@atelier/box';

export const Background = () => {
  return (
    <Box css={{ positions: 'relative', zIndex: '80' }}>
      <Image src="/img/shape-45.png" layout="fill" objectFit="cover" objectPosition="absolute" priority />
    </Box>
  );
};
