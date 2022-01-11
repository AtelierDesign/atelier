import React from 'react';
import { Box } from '@atelier/box';
import { styled } from '@stitches/react';

const CenterContent = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

export const CenterChildren = ({ children }) => {
  return (
    <Box>
      <CenterContent>{children}</CenterContent>
    </Box>
  );
};
