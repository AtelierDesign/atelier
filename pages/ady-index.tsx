// REACT + NEXT IMPORTS
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// ATELIER DESIGN SYSTEM IMPORTS
import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Section } from '@design-system/section';
import { Heading } from '@design-system/heading';
import { Text } from '@design-system/text';
import { Paragraph } from '@design-system/paragraph';
import { Navbar } from '@components/Navbar';
import { FooterMain } from '@components/FooterMain';
import { DefaultButton } from '@components/DefaultButton';
import { Hero } from '@components/Hero';
import { SmallSpacer } from '@components/SmallSpacer';
import { Line } from '@components/Line';
import { OneCol } from '@components/OneCol';
import { SocialSection } from '@components/SocialSection';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { CursorArrowIcon } from '@radix-ui/react-icons';

// STITCH IMPORTS
import { styled } from '@stitches/react';

// APP BEGIN / HOMEPAGE
const AdyIndex = () => {
  return (
    <>
      <Head>
        <title>Atelier®</title>
      </Head>

      <Box>
        {/* <!-- NAVBAR, HERO --> */}
        <Navbar />
        <Hero />
      </Box>
    </>
  );
};

export default AdyIndex;
