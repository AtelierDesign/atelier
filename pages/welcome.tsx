import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';
import { ThemeSwitch } from '@components/ThemeSwitch';
import { SmallButton } from '@components/Buttons/AtelierButton';
import { Button } from '@atelier/button';
import { GradientButton } from '@components/Buttons/AtelierButton';
import { HoverCardComponent } from '@components/Function/HoverCard';
import { AccordionComponent } from '@components/Function/AccordionComponent';

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
          {/* <!-- SMALL BUTTON ( Variants= Lime, orange, gray ) --> */}
          <HoverCardComponent />
          <br></br>

          <br></br>
          <NextLink href="/welcome" passHref>
            <GradientButton>
              <span>Small Gradient</span>
            </GradientButton>
          </NextLink>
          <br></br>

          <br></br>

          <AccordionComponent />
        </ButtonBox>

        <ThemeBox>
          <ThemeSwitch />
        </ThemeBox>
      </Box>
    </>
  );
};

export default Welcome;
