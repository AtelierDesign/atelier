import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Grid } from '@design-system/grid';
import { Heading } from '@design-system/heading';
import { Text } from '@design-system/text';
import { Button } from '@design-system/button';
import React from 'react';

export const OneCol = () => {
  return (
    <Box>
      <Container size="3" css={{ my: '$9' }}>
        <Heading size="1" css={{ marginBottom: '$3', pl: '10px' }}>
          New.
        </Heading>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            gap: '$2',
            bc: '$slate3',
            br: '26px',
            px: '30px'
          }}
        >
          <Box css={{ height: '400px' }}>
            <Text as="p" size="5" css={{ fontWeight: '800', paddingTop: '35px', lineHeight: '10px' }}>
              ADY® INTERVAL
            </Text>
            <Text
              as="p"
              size="3"
              css={{
                fontWeight: '400',
                paddingTop: '16px',
                lineHeight: '18px'
              }}
            >
              ADY® is an ever– expanding ecosystem of essential design components built for modern web.
            </Text>

            <Button size="2" variant="gray" css={{ marginTop: '20px' }}>
              Base Button
            </Button>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
