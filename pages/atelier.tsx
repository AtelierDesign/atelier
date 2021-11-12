import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Section } from '@design-system/section';
import { Navbar } from '@components/Navbar';
import { Hero } from '@components/Hero';
import { OneCol } from '@components/OneCol';
import { GradientBackground } from '@components/GradientBackground';
import { SocialSection } from '@components/SocialSection';
import React from 'react';

const Atelier = () => {
  return (
    <Box css={{ bc: '$slate1' }}>
      <Navbar />
      <GradientBackground />
      <Hero />

      <OneCol />

      <Section size="3">
        <Container size="3" css={{ jc: 'center', ai: 'center', margin: 'auto' }}>
          <SocialSection />
        </Container>
      </Section>
    </Box>
  );
};

export default Atelier;
