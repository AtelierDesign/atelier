import React from 'react';
import { styled } from '@stitches/react';

const Eighty = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: 'auto',
  backgroundColor: '$gray4',
  display: 'block',
  position: 'relative',
  margin: '0',
  padding: '0',

  overflowY: 'visible',
  overflowX: 'hidden',
});

export const EightySection = ({ children }) => {
  return <Eighty>{children}</Eighty>;
};
