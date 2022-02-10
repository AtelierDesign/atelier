// REACT & NEXT IMPORTS
import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';

// ATELIER® DESIGN SYSTEM
import { NormalLink } from '@atelier/normal-link';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';
import { CoverFooter } from '@ui/cover/CoverFooter';

// STITCHES
import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  zIndex: '10',
  width: '100%',
  minWidth: '100vw',
  height: '100%',
  minHeight: '100vh',
  backgroundColor: '$translucent',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  saturate: '300%',
  overflowY: 'hidden',
  overflowX: 'hidden',

  // <!-- RADIAL GRADIENT --> //
  /*
  backgroundImage: `
  radial-gradient(circle 300px at 500px 200px, $blue8, $lime9Alpha),
  radial-gradient(circle 500px at calc(100% - 900px) 300px, $lime6, $lime9Alpha),
  radial-gradient(circle 800px at left center, $blue6, $sky9Alpha)
  `,
  */
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
        position: 'fixed',
        top: '0',
        bottom: '0',
        left: '0',
        right: '0',
        padding: '0px',
        height: '100vh',
        width: '100vw',
        zIndex: '0',
        overflowY: 'visible',
        overflowX: 'visible',
        backgroundColor: '$slate1',
      }}>
      <Head>
        <title>Atelier®.</title>
      </Head>

      <CoverBox>
        <CoverFooter />
        <TextBox>
          <NextLink href="/atelier" passHref>
            <NormalLink variant="normal">
              <Text
                css={{
                  fontFamily: '$neuewide',
                  fontSize: '26px',
                  fontWeight: '900',
                  letterSpacing: '-0.05rem',
                  color: '$gray12',

                  '&:hover': {
                    color: '$gray10',
                    WebkitFilter: 'blur(1px)',
                    filter: 'blur(1px)',
                  },
                }}>
                ATELIER®
              </Text>
            </NormalLink>
          </NextLink>

          <Text css={{ fontWeight: '600', fontSize: '12px', lineHeight: '1.3' }}>
            An ongoing [ <strong>Web3</strong> ] project.
          </Text>
        </TextBox>
      </CoverBox>

      {/* <!-- IMAGE UNDER COVER -->
      <Image src="https://cdn.ady.systems/ady.images/btrfly.png" alt="One" layout="fill" objectFit="cover" />
      <!-- IMAGE UNDER COVER --> */}
    </Box>
  );
}
