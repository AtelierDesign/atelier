import React from 'react';
import { styled } from '@stitches/react';

const OneHundredContainer = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '100vh',
  backgroundColor: '$bronze10',
  display: 'block',
  position: 'relative',
  margin: '0',
  padding: '0',

  overflowY: 'visible',
  overflowX: 'hidden',
});

export const OneHundred = ({ children }) => {
  return <OneHundredContainer>{children}</OneHundredContainer>;
};
