// REACT & NEXT IMPORTS
import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

// ATELIER® DESIGN SYSTEM
import { Navbar } from '@ui/app/Navbar';
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import { FooterMain } from '@ui/app/FooterMain';

import { ShowcaseComp } from '@components/showcase/ShowcaseComp';

// STITCHES
import { styled } from 'stitches.config';

const HeadingBox = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '80%',
  height: '50%',
  margin: 'auto',
  padding: '20px',
});

const Showcase = () => {
  return <Box></Box>;
};

export default Showcase;
