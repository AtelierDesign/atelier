import React from 'react';
import { styled } from '@stitches/react';

const Button = styled('button', {
  //display: 'none',
  backgroundColor: '$lime9',
  color: '$white',
  paddingTop: '6px',
  paddingBottom: '6px',
  paddingLeft: '10px',
  paddingRight: '10px',

  height: '34px',
  borderRadius: '6px',

  border: 'none',
  borderColor: '$gray12',

  // width: 'auto',

  fontFamily: '$inter',
  fontWeight: '600',
  fontSize: '13px',

  mr: '$3',
  '@sm': { display: 'block', mr: '$3' },
  '&:hover': { cursor: 'pointer' },
});

export const LimeButton = ({ children }) => {
  return (
    <Button>
      <span>{children}</span>
    </Button>
  );
};
