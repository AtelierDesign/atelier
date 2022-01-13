import React from 'react';
import { styled } from '@stitches/react';

const Eighty = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: 'auto',
  backgroundColor: '$sage6',
  display: 'block',
  position: 'relative',
  margin: '0',
  padding: '0',

  borderBottomWidth: '1px solid #FFF',

  borderBottomLeftRadius: '46px',
  borderBottomRightRadius: '46px',

  overflowY: 'visible',
  overflowX: 'hidden',
});

export const EightySection = ({ children }) => {
  return <Eighty>{children}</Eighty>;
};
