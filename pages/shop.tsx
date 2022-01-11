import Head from 'next/head';
import React from 'react';

import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import { Navbar } from '@components/Navbar';
import { FooterMain } from '@components/FooterMain';
import { Grid } from '@atelier/grid';

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

const SmallButton = styled('button', {
  borderRadius: '6px',
  height: 'auto',
  marginLeft: '-1px',
  paddingLeft: '10px',
  paddingRight: '10px',
  paddingTop: '4px',
  paddingBottom: '4px',
  fontSize: '12px',
  lineHeight: '1.2',

  width: 'auto',
  bc: '$slate4',
  border: '1px solid',
  borderColor: '$slate10',
});

const Shop = () => {
  return (
    <div>
      <Head>
        <title>Shop.</title>
      </Head>

      <Box css={{ bc: '$slate1', overflow: 'auto', height: '100vh' }}>
        <Navbar />

        <Section size="3">
          <Container size="3" css={{ ai: 'center', paddingTop: '100px', margin: 'auto', textAlign: 'center' }}>
            <Heading size="4">The design yield.</Heading>
            <Text as="p" css={{ fontWeight: '400', fontSize: '14px', lineHeight: '4', color: '$slate9' }}>
              Shop all.
            </Text>
          </Container>
        </Section>

        <Container size="3" css={{ paddingTop: '10px', paddingBottom: '80px', px: '18px' }}>
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
                  <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                    Ady® Interval
                  </Text>
                  <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
                    Shop early for the best selection of holiday favorites.
                    <br />
                    <br />
                  </Text>
                  <SmallButton>Small Button</SmallButton>
                </Box>
              </Card>
            </Box>

            <Box>
              <Card>
                <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                  <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                    Ady® Interval
                  </Text>
                  <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
                    Shop early for the best selection of holiday favorites.
                    <br />
                    <br />
                  </Text>
                  <SmallButton>Small Button</SmallButton>
                </Box>
              </Card>
            </Box>

            <Box>
              <Card>
                <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                  <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                    Product 2
                  </Text>
                  <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
                    Shop early for the best selection of holiday favorites.
                    <br />
                    <br />
                  </Text>
                  <SmallButton>Small Button</SmallButton>
                </Box>
              </Card>
            </Box>

            {/* PRODUCT ROW TWO */}

            <Box>
              <Card>
                <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                  <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                    Ady® Interval
                  </Text>
                  <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
                    Shop early for the best selection of holiday favorites.
                    <br />
                    <br />
                  </Text>
                  <SmallButton>Small Button</SmallButton>
                </Box>
              </Card>
            </Box>

            <Box>
              <Card>
                <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                  <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                    Ady® Interval
                  </Text>
                  <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
                    Shop early for the best selection of holiday favorites.
                    <br />
                    <br />
                  </Text>
                  <SmallButton>Small Button</SmallButton>
                </Box>
              </Card>
            </Box>

            <Box>
              <Card>
                <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                  <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                    Product 2
                  </Text>
                  <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
                    Shop early for the best selection of holiday favorites.
                    <br />
                    <br />
                  </Text>
                  <SmallButton>Small Button</SmallButton>
                </Box>
              </Card>
            </Box>

            {/* PRODUCT ROW THREE */}

            <Box css={{ marginBottom: '50px' }}>
              <Card>
                <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                  <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                    Ady® Interval
                  </Text>
                  <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
                    Shop early for the best selection of holiday favorites.
                    <br />
                    <br />
                  </Text>
                  <SmallButton>Small Button</SmallButton>
                </Box>
              </Card>
            </Box>

            <Box>
              <Card>
                <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                  <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                    Ady® Interval
                  </Text>
                  <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
                    Shop early for the best selection of holiday favorites.
                    <br />
                    <br />
                  </Text>
                  <SmallButton>Small Button</SmallButton>
                </Box>
              </Card>
            </Box>

            <Box>
              <Card>
                <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                  <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                    Product 2
                  </Text>
                  <Text size="1" css={{ fontWeight: '400', fontSize: '11px', lineHeight: '1.5' }}>
                    Shop early for the best selection of holiday favorites.
                    <br />
                    <br />
                  </Text>
                  <SmallButton>Small Button</SmallButton>
                </Box>
              </Card>
            </Box>
          </Grid>
        </Container>

        <FooterMain />
      </Box>
    </div>
  );
};

export default Shop;
