import Image from 'next/image';
import { Box } from '@atelier/box';

// STITCHES STYLED
import { styled } from '@stitches/react';

const CoverContainer = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  alignItems: 'center',
  margin: 'auto',
  padding: '1rem',

  backgroundColor: '$white',
});

export const LoadAdy = () => (
  <Box css={{ textAlign: 'center' }}>
    <CoverContainer>
      <Image src="/svg/design_yield.svg" height={80} width={200} alt="Loading" />
    </CoverContainer>
  </Box>
);
