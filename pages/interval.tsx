import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';

import { styled } from 'stitches.config';

const BlueBox = styled('div', {
  zIndex: '2',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

const Interval = () => {
  return (
    <Box>
      <Box css={{ height: '100vh', width: '100vw', bc: '$blue8' }}>
        <BlueBox>
          <Section size="2">
            <Heading size="3">Hi</Heading>
          </Section>
        </BlueBox>
      </Box>
    </Box>
  );
};

export default Interval;
