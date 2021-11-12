import { styled } from '../stitches.config';
import { Box } from '@design-system/box';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';

const Grid = styled('div', {
  flow: 'column',
  overflowX: 'scroll',
  overflowY: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  bc: '$slate1'
});

const Scroller = styled('div', {
  width: '100vw',
  height: 'auto',
  backgroundColor: '$slate1',
  display: 'inline-flex',

  overflowX: 'auto',
  overflowY: 'hidden',

  padding: '18px',
  marginTop: '20px'
});

export const ScrollContainer = ({ children }) => {
  return (
    <Box css={{ padding: '0px' }}>
      <Scroller className="scroll-container">
        <Grid className="scroll-grid">
          {/* INSERT CARD COMPONENT WITH CHILDREN */}
          {/* <Card> .. children .. </Card> */}

          {children}
        </Grid>
      </Scroller>
      <ArrowRightIcon />
    </Box>
  );
};
