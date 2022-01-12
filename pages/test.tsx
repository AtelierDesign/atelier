import { GradientBackground } from '@components/Background/GradientBackground';
import { Text } from '@atelier/text';
import { Box } from '@atelier/box';

import React from 'react';

export default function Test() {
  return (
    <>
      <Box css={{ height: '100vh' }}>
        <GradientBackground>
          <Section size="3">
            <Container size="2">
              <Heading id="verifiedbadge" css={{ mb: '$6', scrollMarginTop: '$7' }}>
                VerifiedBadge
              </Heading>
              <Flex css={{ ai: 'baseline' }}>
                <Text size="3" css={{ fontWeight: '500' }}>
                  Colm Tuite
                </Text>
                <VerifiedBadge css={{ as: 'center', mx: '$1' }} />
                <Text size="3" css={{ color: '$slate11' }}>
                  @colmtuite
                </Text>
              </Flex>
            </Container>
          </Section>
        </GradientBackground>
      </Box>
    </>
  );
}

// export default Test;
