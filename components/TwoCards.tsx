import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Grid } from '@atelier/grid';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import React from 'react';

export const TwoCards = () => {
  return (
    <Container size="3" css={{ my: '$9' }}>
      <Heading size="2" css={{ marginBottom: '$3' }}>
        Size 2
      </Heading>
      <Grid
        css={{
          gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
          gap: '$4',
        }}>
        <Box css={{ bc: '$bronze2', br: '$4', height: '300px' }}>
          <Text as="p" size="4" css={{ fontWeight: '800', padding: '26px', lineHeight: '27px' }}>
            COLUMN ONE
          </Text>
        </Box>
        <Box css={{ bc: '$bronze2', br: '$4', height: '300px' }}>
          <Text as="p" size="4" css={{ padding: '26px', lineHeight: '27px' }}>
            COLUMN TWO
          </Text>
        </Box>
      </Grid>
    </Container>
  );
};
