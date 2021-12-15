import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import NextLink from 'next/link';
import { NormalLink } from '@design-system/normal-link';
import { TwitterLogoIcon } from '@radix-ui/react-icons';
import { Box } from '@design-system/box';
import { Text } from '@design-system/text';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '100%',
  backgroundColor: 'rgba(240, 240, 240, 0.3)',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  opacity: '0.9',
  backdropFilter: 'invert(10%) blur(10px)',
  saturate: '300%',
});

const TextBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

export default function Soon() {
  return (
    <Box css={{ padding: '0px', height: '100vh', zIndex: '0' }}>
      <Head>
        <title>Atelier®. Coming Soon</title>
      </Head>

      <CoverBox>
        <TextBox>
          <Text css={{ textAlign: 'center', lineHeight: '2', fontSize: '34px', fontWeight: '900', letterSpacing: '-0.1rem' }}>
            ATELIER DESIGN YIELD®
          </Text>

          <Text css={{ textAlign: 'center', lineHeight: '2', fontSize: '14px', fontWeight: '600' }}>WILL BE OPENING SOON.</Text>
          <Box css={{ zIndex: '600', color: '#000', paddingTop: '50px' }}>
            <NextLink href="https://twitter.com/_adyworld" passHref>
              <NormalLink variant="dark">
                <TwitterLogoIcon />
              </NormalLink>
            </NextLink>
          </Box>
        </TextBox>
      </CoverBox>
      <Image src="https://cdn.ady.systems/assets/blue-swirl.png" alt="One" layout="fill" objectFit="cover" />
    </Box>
  );
}
