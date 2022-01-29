import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';
import { ThemeSwitch } from '@components/ThemeSwitch';
import { SmallButton } from '@components/Buttons/AtelierButton';

import useNextBlurhash from 'use-next-blurhash';

import { styled } from 'stitches.config';

const ButtonBox = styled('div', {
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

const ThemeBox = styled('div', {
  backgroundColor: '$light100',
  position: 'fixed',
  bottom: '0',
  padding: '8px',
  margin: 'auto',
  alignItems: 'center',
  textAlign: 'center',
  height: 'auto',

  width: '100%',
});

// APP BEGIN / WELCOME (Newsletter Success Redirect)
const Blur = () => {
  // useNextBlurhash(hash, width, height, puch);
  const [blurDataUrl] = useNextBlurhash(`LqKKTmxv-j$dWCRowJad},RPS%s:`, 720, 360, 0);
  return (
    <>
      <Box
        css={{
          padding: '0px',
          height: '100vh',
          zIndex: '0',
          backgroundColor: '$slate1',

          alignItems: 'center',
        }}>
        <Head>
          <title>Atelier®.</title>
        </Head>

        <ButtonBox>
          <Image
            src="https://cdn.ady.systems/ady.images/one.png"
            alt="Landscape image"
            width="720"
            height="360"
            placeholder="blur"
            blurDataURL={blurDataUrl}
          />
        </ButtonBox>

        <ThemeBox>
          <ThemeSwitch />
        </ThemeBox>
      </Box>
    </>
  );
};

export default Blur;
