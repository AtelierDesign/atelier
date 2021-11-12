import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Section } from '@design-system/section';
import { Navbar } from '@components/Navbar';
import { Hero } from '@components/Hero';
import { OneCol } from '@components/OneCol';
import { SocialSection } from '@components/SocialSection';
import React from 'react';

import { styled } from '@stitches/react';

const GridX = styled('div', {
  flow: 'column',
  overflowX: 'scroll',
  overflowY: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px'
});

const Scroller = styled('div', {
  width: '100%',
  height: 'auto',
  backgroundColor: 'transparent',
  display: 'inline-flex',

  overflowX: 'scroll',
  overflowY: 'hidden',

  padding: '18px',
  marginTop: '20px'
});

const Card = styled('div', {
  width: '350px',
  minWidth: '350px',
  height: '400px',
  backgroundColor: '$slate3',
  display: 'block',
  position: 'relative',

  borderRadius: '32px',
  marginTop: '18px',
  padding: '40px',
  alignItems: 'center',
  webkitScrollbar: 'none'
});

const Atelier = () => {
  return (
    <div>
      <Box css={{ bc: '$slate1', marginTop: '0', marginLeft: '0', marginRight: '0', marginBottom: '20px', px: '0', paddingBottom: '30px' }}>
        <Navbar />
        <Hero />

        <OneCol />
      </Box>

      <Box css={{ padding: '0px' }}>
        <Scroller className="scroll-container">
          <GridX className="scroll-grid">
            {/* INSERT CARD COMPONENT WITH CHILDREN */}
            {/* <Card> .. children .. </Card> */}
            <Card>Card1</Card>
            <Card>Card1</Card>
            <Card>Card1</Card>
            <Card>Card1</Card>
            <Card>Card1</Card>
          </GridX>
        </Scroller>
      </Box>

      <Box css={{ bc: '$slate1', margin: '0', px: '0' }}>
        <Section size="3">
          <Container size="3" css={{ jc: 'center', ai: 'center', margin: 'auto' }}>
            <SocialSection />
          </Container>
        </Section>
      </Box>
    </div>
  );
};

export default Atelier;
