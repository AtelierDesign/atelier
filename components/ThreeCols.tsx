import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Grid } from '@design-system/grid';
import { Heading } from '@design-system/heading';
import { Text } from '@design-system/text';
import React from 'react';

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
          br: '$3'
        }}
      >
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
