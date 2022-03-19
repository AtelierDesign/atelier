// REACT & NEXT IMPORTS
import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextPage } from 'next';

// ATELIER® DESIGN SYSTEM
import { Navbar } from '@ui/app/Navbar';
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';
import { Text } from '@atelier/text';
import { Grid } from '@atelier/grid';

import { FooterMain } from '@ui/app/FooterMain';

// STITCHES.DEV
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
  fontWeight: '600',
  lineHeight: '1.2',
  width: 'auto',
  bc: '$slate4',
  border: '1px solid',
  borderColor: '$slate10',

  '&:hover': {
    backgroundColor: '$slate8',
    cursor: 'pointer',
  },
});

const Shop: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Shop.</title>
      </Head>

      {/* <!-- NAVBAR --> */}
      <Navbar />

      <Box css={{ bc: '$slate1', overflow: 'auto', height: '100vh' }}>
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
                  <SmallButton>View Product</SmallButton>
                </Box>
                <Image
                  className="color__swirl"
                  src="https://cdn.ady.systems/ady.images/one.png"
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  objectPosition="absolute"
                />
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
                  <SmallButton>View Product</SmallButton>
                </Box>
                <Image
                  className="color__swirl"
                  src="https://cdn.ady.systems/ady.images/one.png"
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  objectPosition="absolute"
                />
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
                  <SmallButton>View Product</SmallButton>
                </Box>
                <Image
                  className="color__swirl"
                  src="https://cdn.ady.systems/ady.images/four.png"
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  objectPosition="absolute"
                />
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
                  <SmallButton>View Product</SmallButton>
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
                  <SmallButton>View Product</SmallButton>
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
                  <SmallButton>View Product</SmallButton>
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
                  <SmallButton>View Product</SmallButton>
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
                  <SmallButton>View Product</SmallButton>
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
                  <SmallButton>View Product</SmallButton>
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
