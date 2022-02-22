import React from 'react';
import Link from 'next/link';

// @ATELIER
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';
import { Text } from '@atelier/text';
import { Grid } from '@atelier/grid';
import { SmallButton } from '@ui/buttons/AtelierButton';
import { ArrowLink } from '@ui/buttons/ArrowLink';

import { styled } from '@stitches/react';

const Card = styled('div', {
  display: 'flex',
  backgroundColor: '$slate3',
  position: 'relative',
  borderRadius: '20px',
  marginTop: '18px',
  padding: '40px',
  alignItems: 'center',
  webkitScrollbar: 'none',
  height: '300px',
});

export const ProductSection = () => {
  return (
    <>
      <Container size="3" css={{ paddingTop: '120px', paddingBottom: '120px', px: '18px' }}>
        <Heading size="2" css={{ color: '$gray12', paddingBottom: '50px', textAlign: 'center' }}>
          Our Products
        </Heading>
        <Grid
          css={{
            gap: '10px',
            gridTemplateColumns: '1fr',
            '@bp1': {
              gap: '$4',
              gridTemplateColumns: '1fr 1fr',
            },
            '@bp2': {
              gap: '$4',
              gridTemplateColumns: '1fr 1fr 1fr',
            },
          }}>
          {/* PRODUCT ROW ONE */}
          <Box>
            <Card>
              <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                <Text size="3" css={{ fontWeight: '600', lineHeight: '2' }}>
                  Interval
                </Text>
                <Text size="1" css={{ fontWeight: '400', fontSize: '12px', lineHeight: '1.5' }}>
                  Shop early for the best selection of holiday favorites.
                  <br />
                  <br />
                </Text>

                {/* <!-- ARROW LINK --> */}
                <ArrowLink href="/shop">
                  <span>View Product</span>
                </ArrowLink>
              </Box>
            </Card>
          </Box>

          <Box>
            <Card>
              <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                <Text size="3" css={{ fontWeight: '600', lineHeight: '2' }}>
                  Interval
                </Text>
                <Text size="1" css={{ fontWeight: '400', fontSize: '12px', lineHeight: '1.5' }}>
                  Shop early for the best selection of holiday favorites.
                  <br />
                  <br />
                </Text>

                {/* <!-- ARROW LINK --> */}
                <ArrowLink href="/shop">
                  <span>View Product</span>
                </ArrowLink>
              </Box>
            </Card>
          </Box>

          <Box>
            <Card>
              <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                <Text size="3" css={{ fontWeight: '600', lineHeight: '2' }}>
                  Interval
                </Text>
                <Text size="1" css={{ fontWeight: '400', fontSize: '12px', lineHeight: '1.5' }}>
                  Shop early for the best selection of holiday favorites.
                  <br />
                  <br />
                </Text>

                {/* <!-- ARROW LINK --> */}
                <ArrowLink href="/shop">
                  <span>View Product</span>
                </ArrowLink>
              </Box>
            </Card>
          </Box>

          {/* PRODUCT ROW TWO */}
        </Grid>
      </Container>
    </>
  );
};
