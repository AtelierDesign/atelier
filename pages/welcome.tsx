import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';
import { ThemeSwitch } from '@components/ThemeSwitch';
import { SmallButton } from '@components/Buttons/AtelierButton';
import { Button } from '@atelier/button';
import { GradientButton } from '@atelier/adybtn';

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
const Welcome = () => {
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
          {/* <!-- STANDARD BUTTON --> */}
          <NextLink href="/privacy" passHref>
            <Button>
              <span>Lime Button</span>
            </Button>
          </NextLink>

          <br></br>

          {/* <!-- SMALL BUTTON ( Variants= Lime, orange, gray ) --> */}
          <SmallButton color="lime">
            <span>Small Lime</span>
          </SmallButton>

          <SmallButton color="light_gray">
            <span>Small Orange</span>
          </SmallButton>

          <br></br>
          <NextLink href="/welcome" passHref>
            <GradientButton>
              <span>Small Gradient</span>
            </GradientButton>
          </NextLink>
        </ButtonBox>

        <ThemeBox>
          <ThemeSwitch />
        </ThemeBox>
      </Box>
    </>
  );
};

export default Welcome;
