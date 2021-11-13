import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Grid } from '@design-system/grid';
import { Text } from '@design-system/text';

import Image from 'next/image';

import { styled } from '@stitches/react';

const Card = styled('div', {
  display: 'flex',
  backgroundColor: 'none',
  position: 'relative',
  bottom: '0',
  left: '0',
  right: '0',
  borderRadius: '20px',
  marginTop: '18px',
  padding: '40px',
  alignItems: 'center',
  webkitScrollbar: 'none',

  height: '120px'
});

export const FooterMain = () => {
  return (
    <Box
      css={{
        borderTop: '1px solid',
        borderColor: '$slate4',
        bc: '$gray1',
        paddingTop: '40px',
        paddingBottom: '40px',
        margin: 'auto',
        px: '0',
        height: 'auto'
      }}>
      {/* NAVIGATION SECTION */}
      <Container size="3" css={{ px: '18px' }}>
        <Grid
          css={{
            gap: '0px',
            gridTemplateColumns: '1fr',
            '@bp1': {
              gap: '0px',
              gridTemplateColumns: '1fr 1fr 1fr'
            },
            '@bp2': {
              gap: '0px',
              gridTemplateColumns: '1fr 1fr 1fr'
            }
          }}>
          {/* PRODUCT ROW ONE */}

          <Box>
            <Card>
              <Box css={{ position: 'absolute', top: '0', left: '0', margin: '5px' }}>
                <Text size="2" css={{ fontWeight: '600', lineHeight: '1', textAlign: 'left' }}>
                  <Image className="logo" alt="logo" src="/butterfly_logo.svg" width={70} height={25} />
                </Text>

                <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
                  Copyright © 2021
                </Text>
              </Box>
            </Card>
          </Box>

          <Box>
            <Card>
              <Box css={{ position: 'absolute', top: '0', left: '0', margin: '5px' }}>
                <Text size="2" css={{ fontWeight: '600', lineHeight: '2' }}>
                  Link Section One
                </Text>

                <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '2' }}>
                  One
                </Text>

                <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '2' }}>
                  Two
                </Text>

                <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '2' }}>
                  Three
                </Text>
              </Box>
            </Card>
          </Box>

          <Box>
            <Card>
              <Box css={{ position: 'absolute', top: '0', left: '0', margin: '5px' }}>
                <Text size="2" css={{ fontWeight: '600', lineHeight: '2' }}>
                  Link Section TWO
                </Text>

                <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '2' }}>
                  One
                </Text>

                <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '2' }}>
                  Two
                </Text>

                <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '2' }}>
                  Three
                </Text>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
