import Head from 'next/head';
import React from 'react';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';
import { Button, SmallButton } from '@components/Buttons/StandardButton';

import { styled } from 'stitches.config';

const ButtonBox = styled('div', {
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

// APP BEGIN / WELCOME (Newsletter Success Redirect)
const Welcome = () => {
  return (
    <>
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

        <ButtonBox>
          {/* <!-- STANDARD BUTTON --> */}
          <Button color="lime">
            <span>Lime Button</span>
          </Button>

          <Button color="orange">
            <span>Orange Button</span>
          </Button>

          <br></br>

          {/* <!-- SMALL BUTTON ( Variants= Lime, orange, gray ) --> */}
          <SmallButton color="lime">
            <span>Small Lime</span>
          </SmallButton>

          <SmallButton color="gray">
            <span>Small Orange</span>
          </SmallButton>

          <br></br>
        </ButtonBox>
      </Box>
    </>
  );
};

export default Welcome;
