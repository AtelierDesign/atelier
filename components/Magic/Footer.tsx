import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Grid } from '@design-system/grid';
import { Text } from '@design-system/text';

import NextLink from 'next/link';
// import Image from 'next/image';

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

  height: '120px',
});

export const Footer = () => {
  return (
    <Box
      css={{
        borderTop: '1px solid',
        borderColor: '$slate4',
        bc: '$gray1',
        paddingTop: '60px',
        paddingBottom: '70px',
        margin: 'auto',
        px: '0',
        height: 'auto',
      }}>
      {/* NAVIGATION SECTION */}
      <Container size="3" css={{ px: '18px' }}>
        <Grid
          css={{
            gap: '0px',
            gridTemplateColumns: '1fr',
            '@bp1': {
              gap: '0px',
              gridTemplateColumns: '1fr 1fr 1fr',
            },
            '@bp2': {
              gap: '0px',
              gridTemplateColumns: '1fr 1fr 1fr',
            },
          }}>
          {/* PRODUCT ROW ONE */}

          <Box>
            <Card>
              <Box css={{ position: 'absolute', top: '0', left: '0', margin: '5px' }}>
                <Text
                  size="2"
                  css={{
                    fontFamily: '$neueplak',
                    fontSize: '14px',
                    fontWeight: '600',
                    lineHeight: '1',
                    textAlign: 'left',
                  }}>
                  ATELIER®
                  {/* <!-- IMAGE LOGO - Hold
                <Image
                    className="logo"
                    alt="logo"
                    src="/butterfly_logo.svg"
                    width={70}
                    height={25}
                  />
                  --> */}
                </Text>

                <Text
                  size="1"
                  css={{
                    fontWeight: '600',
                    fontSize: '10px',
                    lineHeight: '1.5',
                    letterSpacing: '-.03rem',
                  }}>
                  Copyright © 2021
                </Text>
              </Box>
            </Card>
          </Box>

          <Box>
            <Card>
              <Box css={{ position: 'absolute', top: '0', left: '0', margin: '5px' }}>
                <Text size="2" css={{ fontWeight: '600', lineHeight: '2' }}>
                  Information
                </Text>

                {/* (Information) FOOTER LINK 01 */}
                <NextLink href="/privacy" passHref>
                  <Text
                    size="1"
                    css={{
                      fontWeight: '400',
                      fontSize: '11px',
                      lineHeight: '2',
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}>
                    Terms & Conditions
                  </Text>
                </NextLink>

                {/* (Information) FOOTER LINK 02 */}
                <NextLink href="/privacy" passHref>
                  <Text
                    size="1"
                    css={{
                      fontWeight: '400',
                      fontSize: '11px',
                      lineHeight: '2',
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}>
                    Privacy
                  </Text>
                </NextLink>

                {/* (Information) FOOTER LINK 03 */}
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
                  Resources
                </Text>

                {/* (RESOURCES) FOOTER LINK 01 */}
                <NextLink href="/test" passHref>
                  <Text
                    size="1"
                    css={{
                      fontWeight: '400',
                      fontSize: '11px',
                      lineHeight: '2',
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}>
                    Test Page
                  </Text>
                </NextLink>

                {/* (RESOURCES) FOOTER LINK 02 */}
                <NextLink href="/connect" passHref>
                  <Text
                    size="1"
                    css={{
                      fontWeight: '400',
                      fontSize: '11px',
                      lineHeight: '2',
                      '&:hover': {
                        cursor: 'pointer',
                      },
                    }}>
                    WalletConnect
                  </Text>
                </NextLink>

                {/* (RESOURCES) FOOTER LINK 03 */}
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