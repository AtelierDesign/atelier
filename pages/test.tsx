import React from 'react';
import { Container } from '@atelier/container';
import { FalldownMenu } from '@components/Function/FalldownMenu';
import { TestNavbar } from '@components/Function/TestNavbar';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '0',
});

export default function Test() {
  return (
    <>
      <TestNavbar />
      <CoverBox></CoverBox>
    </>
  );
}
