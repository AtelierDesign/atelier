import React from 'react';

import { Subscribe } from '@components/Subscribe';

// STYLED ITEMS
import { styled } from 'stitches.config';

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

export default () => {
  return (
    <CoverBox>
      <Subscribe />
    </CoverBox>
  );
};
