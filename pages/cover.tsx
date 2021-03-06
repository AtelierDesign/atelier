// REACT & NEXT IMPORTS
import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

// ATELIER® DESIGN SYSTEM
import { NormalLink } from '@atelier/normal-link';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';
import { CoverFooter } from '@ui/cover/CoverFooter';
import { Spacer } from '@components/Spacer';
import blueButterfly from '@public/svg/blue_logo.svg';
import tapeButterfly from '@public/img/btrfly/tapeButterfly.png';

// STITCHES
import { styled } from '@stitches/react';
import toast, { Toaster } from 'react-hot-toast';

// const notify = () => toast('Here is your toast.');
const notify = () => toast.success('Successfully created!');

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
});

const TextBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '45%',
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
          <NextLink href="/" passHref>
            <NormalLink variant="normal">
              <Image src={blueButterfly} width={90} height={90} alt="ATELIER®" />
            </NormalLink>
          </NextLink>

          <Text css={{ fontWeight: '600', fontSize: '13px', lineHeight: '1' }}>
            An ongoing [ <strong>project</strong> ]
          </Text>
        </TextBox>
      </CoverBox>
      {/* <!--
      <Image src={tapeButterfly} alt="One" layout="fill" objectFit="cover" />
      --> */}
    </Box>
  );
}
