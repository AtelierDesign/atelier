import { Box } from '@design-system/box';
import { Navbar } from '@components/Navbar';
import { Hero } from '@components/Hero';
import { OneCol } from '@components/OneCol';
import { Separator } from '@design-system/separator';
import { Container } from '@design-system/container';
import React from 'react';

const Resources = () => {
  return (
    <div>
      <Box css={{ bc: 'transparent', zIndex: '400' }}>
        <Navbar />
        <Hero />
        <Container size="1">
          <Separator size="2" />
        </Container>
        <OneCol />
      </Box>
    </div>
  );
};

export default Resources;
