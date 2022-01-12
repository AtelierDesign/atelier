import { GradientBackground } from '@components/Background/GradientBackground';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';

import React from 'react';

export default function Test() {
  return (
    <>
      <Box css={{ height: '100vh' }}>
        <GradientBackground>
          <Text> HEY </Text>
        </GradientBackground>
      </Box>
    </>
  );
}

// export default Test;
