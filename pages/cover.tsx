import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import NextLink from 'next/link';
import coverSwirl from '../public/img/four.png';
import { NormalLink } from '@atelier/normal-link';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';
import { SmallSpacer } from '@components/SmallSpacer';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '100%',
  backgroundColor: 'rgba(240, 240, 240, 0.3)',
  // backgroundColor: '$gray12',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  opacity: '0.9',
  backdropFilter: 'invert(10%) blur(20px)',
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
        backgroundColor: '$gray12',
      }}>
      <Head>
        <title>Atelier®.</title>
      </Head>

      <CoverBox>
        <TextBox>
          <NextLink href="/ady-index" passHref>
            <NormalLink variant="normal">
              <Text
                css={{
                  fontFamily: '$neuewide',
                  fontSize: '24px',
                  fontWeight: '900',
                  letterSpacing: '-0.05rem',
                  color: '$white',
                }}>
                ATELIER®
              </Text>
              {/* <!-- HOLD LOGO <Image src="/logo.svg" alt="One" width={120} height={60} /> --> */}
            </NormalLink>
          </NextLink>
        </TextBox>
      </CoverBox>
      {/*<Image src={coverSwirl} alt="One" layout="fill" objectFit="cover" />*/}
      <Image src="https://cdn.ady.systems/ady.images/btrfly.png" alt="One" layout="fill" objectFit="cover" />
    </Box>
  );
}
