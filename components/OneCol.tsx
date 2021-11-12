import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Grid } from '@design-system/grid';
import { Text } from '@design-system/text';
import { Heading } from '@design-system/heading';
import { Button } from '@design-system/button';
import Image from 'next/image';
import React from 'react';

export const OneCol = () => {
  return (
    <Box>
      <Container size="3" css={{ my: '40px', px: '18px', bc: 'transparent' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            gap: '$2',
            bc: '$clear100',
            br: '26px',
            px: '30px',
            zIndex: '20',
            position: 'relative'
          }}>
          <Box
            css={{
              height: '400px',
              position: 'relative',
              padding: '0',
              margin: '0',
              zIndex: '100',
              bc: '$clear100',
              backdropFilter: 'blur(2px)',
              saturate: '200%'
            }}>
            <Heading
              size="2"
              css={{
                fontWeight: '700',
                paddingTop: '35px',
                lineHeight: '10px',
                zIndex: '80'
              }}>
              Ady® Interval
            </Heading>
            <Text
              as="p"
              size="3"
              css={{
                fontWeight: '400',
                paddingTop: '16px',
                lineHeight: '22px',
                color: '$slate9',
                '@bp1': { width: '400px' }
              }}>
              ADY® is an ever– expanding ecosystem of essential design components built for modern web.
            </Text>

            <Button size="2" variant="gray" css={{ marginTop: '20px', zIndex: '25' }}>
              Base Button
            </Button>
          </Box>

          <Box css={{ zIndex: '4' }}>
            <Image
              className="color__swirl"
              src="/img/blue-swirl.png"
              layout="fill"
              objectFit="contain"
              alt="image"
              // objectPosition="absolute"
              priority
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
