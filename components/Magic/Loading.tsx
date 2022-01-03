import Image from 'next/image';
import { Box } from '@design-system/box';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
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

export const Loading = () => (
  <Box css={{ textAlign: 'center' }}>
    <CoverBox>
      <Image src="/svg/spinner.svg" height={40} width={40} alt="Loading" />
    </CoverBox>
  </Box>
);
