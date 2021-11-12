import { styled } from '../stitches.config';
import { Box } from '@design-system/box';
import React from 'react';

const CardParent = styled('div', {
  width: '350px',
  minWidth: '350px',
  height: '400px',
  backgroundColor: '$slate3',
  display: 'block',
  position: 'relative',

  borderRadius: '32px',
  marginTop: '18px',
  padding: '40px',
  alignItems: 'center',
  webkitScrollbar: 'none'
});

export const Card = ({ children }) => {
  return (
    <Box css={{ padding: '0px' }}>
      <CardParent>
        {/* INSERT CARD COMPONENT WITH CHILDREN */}
        {/* <Card> .. children .. </Card> */}

        {children}
      </CardParent>
    </Box>
  );
};
