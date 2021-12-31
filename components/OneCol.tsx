import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Grid } from '@design-system/grid';
import { Text } from '@design-system/text';
import { Heading } from '@design-system/heading';
import { TimeCode } from '@components/Time/TimeCode';
import { Button } from '@design-system/button';
import { ExternalLinkIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import React from 'react';

import { styled } from '@stitches/react';

const TimeDisplay = styled('div', {
  fontFamily: '$jetbrain',
  fontSize: '14px',
  fontWeight: '500',
  color: '$mauve12',
  textAlign: 'left',
  margin: '0',
  paddingTop: '20px',
  ppaddingBottom: '40px',
  paddingLeft: '3px',
  paddingRight: '0px',
  zIndex: '200',
  lineHeight: '22px',

  userSelect: 'none',
  WebkitUserSelect: 'none',

  '&:hover': {
    cursor: 'auto',
    userSelect: 'none',
    // cursor: 'url(https://cdn.ady.systems/assets/mauve-butterfly.svg) 4 12, auto',
  },
});

const adyLoader = ({ src, width, quality }) => {
  return `https://ady.world/${src}?w=${width}&q=${quality || 75}`;
};

export const OneCol = () => {
  return (
    <Box css={{ bc: '$slate1' }}>
      <Container size="3" css={{ px: '18px', bc: '$slate1', position: 'relative' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            gap: '$2',
            bc: '$clear100',
            br: '26px',
            px: '30px',
            border: '1px solid',
            borderColor: '$slate6',
            zIndex: '20',
            position: 'relative',
          }}>
          <Box
            css={{
              height: '400px',
              position: 'relative',
              padding: '0',
              margin: '0',
              zIndex: '100',
              saturate: '200%',
            }}>
            <Heading
              size="2"
              css={{
                fontFamily: '$neuewide',
                textTransform: 'uppercase',
                fontWeight: '500',
                paddingTop: '35px',
                lineHeight: '10px',
                zIndex: '80',
              }}>
              <strong>Ady</strong>® Interval
            </Heading>
            <Text
              as="p"
              variant="gray"
              size="4"
              className="image-text"
              css={{
                fontWeight: '400',
                paddingTop: '16px',
                lineHeight: '22px',
                '@bp1': { width: '450px' },
              }}>
              ADY® is an ever– expanding ecosystem of essential design components built for modern
              web.
            </Text>
            <TimeDisplay>
              <TimeCode />
            </TimeDisplay>

            <Button
              size="2"
              variant="gray"
              css={{
                fontSize: '14px',
                marginTop: '30px',
                zIndex: '25',
                px: '20px',
                borderRadius: '10px',
                '&:hover': {
                  backgroundColor: '$gray3',
                  color: '$orange9',
                  cursor: 'pointer',
                },
              }}>
              Shop Now
              <Box css={{ marginLeft: '$1', lineHeight: 'normal' }}>
                <ExternalLinkIcon />
              </Box>
            </Button>
          </Box>
          <div className="color__box">
            <Image
              loader={adyLoader}
              className="color__swirl"
              src="/img/blue-swirl.png"
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
              priority
            />
          </div>
        </Grid>
      </Container>
    </Box>
  );
};
