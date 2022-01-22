import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import NextLink from 'next/link';
import a from '../public/mov/a.gif';
import { NormalLink } from '@atelier/normal-link';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';
import { SmallSpacer } from '@components/SmallSpacer';
import { CoverFooter } from '@components/CoverFooter';
import { CoverNavbar } from '@components/Function/CoverNavbar';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '100%',
  minHeight: '100vh',
  // backgroundColor: 'rgba(240, 240, 240, 0.3)',
  backgroundColor: '$translucent',

  // RADIAL GRADIENT
  /*
  backgroundImage: `
  radial-gradient(circle 300px at 500px 200px, $blue8, $lime9Alpha),
  radial-gradient(circle 500px at calc(100% - 900px) 300px, $lime6, $lime9Alpha),
  radial-gradient(circle 800px at left center, $blue6, $sky9Alpha)
  `,
*/
  display: 'block',
  position: 'relative',
  margin: 'auto',
  // opacity: '0.9',
  // backdropFilter: 'invert(10%) blur(20px)',
  saturate: '300%',

  overflowY: 'hidden',
  overflowX: 'hidden',
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

export default function Cover() {
  return (
    <Box
      css={{
        padding: '0px',
        height: '100vh',
        zIndex: '0',
        overflowY: 'hidden',
        overflowX: 'hidden',
        backgroundColor: '$slate1',
      }}>
      <Head>
        <title>Atelier®.</title>
      </Head>

      <CoverBox>
        <CoverFooter />
        <TextBox>
          {/*
          <NextLink href="/cover" passHref>
            <NormalLink variant="normal">
              <Text
                css={{
                  fontFamily: '$neuewide',
                  fontSize: '20px',
                  fontWeight: '900',
                  letterSpacing: '-0.05rem',
                  color: '$gray12',

                  '&:hover': {
                    color: '$gray10',
                  },
                }}>
                ATELIER DESIGN YIELD®
              </Text>
              <Text css={{ fontWeight: '600', fontSize: '12px', lineHeight: '1.3' }}>
                An ongoing [ <strong>Web3</strong> ] project.
              </Text>
              {/*
              <Text css={{ fontWeight: '500', fontSize: '12px', lineHeight: '1.2' }}>
                <strong>ADY</strong>®Store Opening Soon. An ongoing [Web3] prjct. © 2022
              </Text>

            </NormalLink>
          </NextLink>
          */}
        </TextBox>
      </CoverBox>
      <Image src={a} alt="One" layout="fill" objectFit="cover" />
      {/* <!--   <Image src="https://cdn.ady.systems/ady.images/btrfly.png" alt="One" layout="fill" objectFit="cover" /> --> */}
    </Box>
  );
}
