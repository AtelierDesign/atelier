import React from 'react';
import { Password } from '@components/Forms/Password';

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
  padding: '1rem',
});

export default function Test() {
  return (
    <>
      <CoverBox>
        <Password />
      </CoverBox>
    </>
  );
}
