import React from 'react';

import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Grid } from '@atelier/grid';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';

export const ThreeCols = () => {
  return (
    <Container size="3" css={{ my: '$9' }}>
      <Heading size="3" css={{ marginBottom: '$3' }}>
        Size 3
      </Heading>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '$4',
          bc: '$lime9',
          br: '$3',
        }}>
        <Box>
          <Text as="p" size="4" css={{ fontWeight: '800', padding: '26px', lineHeight: '27px' }}>
            COLUMN ONE
          </Text>
        </Box>
        <Box>
          <Text as="p" size="4" css={{ padding: '26px', lineHeight: '27px' }}>
            COLUMN TWO
          </Text>
        </Box>
      </Grid>
    </Container>
  );
};
