// REACT + NEXT IMPORTS
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// ATELIER DESIGN SYSTEM IMPORTS
import { Box } from '@atelier/box';
import { Text } from '@atelier/text';
import { Navbar } from '@components/Navbar';
import { Hero } from '@components/Hero';
import { SocialSection } from '@components/SocialSection';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';
import { Container } from '@atelier/container';
import { Grid } from '@atelier/grid';
import { EightySection } from '@components/EightySection';
import { AtelierSubscribe } from '@components/Function/AtelierSubscribe';
import { FooterMain } from '@components/FooterMain';
import btrfly from '../public/img/btrfly_g.jpg';

// COOKIE NOTICE
import { CookieNotice } from '@components/Function/CookieNotice';

// STYLED ITEMS
import { styled } from 'stitches.config';

const CoverBox = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '100vh',
  backgroundColor: '$slate1',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  overflowY: 'visible',
  overflowX: 'hidden',
});

const BarSection = styled('div', {
  boxSizing: 'border-box',
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '100px',
  backgroundColor: '$gray4',
  display: 'block',
  position: 'relative',
  margin: '0',
  padding: '0',
  boxShadow: `0 2px 2px $lime9`,
  '@lg': {
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  },
  '@md': {
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  },
  '@sm': {
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  },
  '@xs': {
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
  },
});

const Bar = styled('div', {
  boxSizing: 'border-box',
  zIndex: '1',
  width: '100vw',
  minWidth: '100vw',
  height: '400px',
  backgroundColor: '$gray4',
  display: 'block',
  position: 'relative',
  margin: '0',
  padding: '0',

  alignItems: 'center',
  textAlign: 'center',
});

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

// APP BEGIN / HOMEPAGE
const AdyIndex = () => {
  return (
    <>
      <Box css={{ padding: '0px', height: '100vh', zIndex: '0' }}>
        <Head>
          <title>Atelier®</title>
        </Head>
        <CoverBox>
          <Box>
            <CookieNotice />
            <Navbar />
            <Hero />
          </Box>

          <BarSection />

          <EightySection>
            <Container size="3">
              <Heading
                size="4"
                css={{
                  fontSize: '50px',
                  fontFamily: '$neuewide',
                  textAlign: 'center',
                  paddingBottom: '20px',
                  '@sm': {
                    fontSize: '26px',
                    textAlign: 'left',
                    paddingBottom: '10px',
                  },
                }}>
                ATELIER®
              </Heading>

              <Paragraph
                size="2"
                css={{
                  textAlign: 'center',
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '1.4',
                  color: '$gray11',
                  mb: '30px',
                  '@sm': {
                    textAlign: 'left',
                    fontSize: '16px',
                  },
                  '@bp2': {
                    // mx: 250,
                    ta: 'center',
                    mb: '60px',
                    lineHeight: '1.3',
                  },
                  '@bp3': {
                    //  mx: 300,
                    ta: 'center',
                    mb: '60px',
                    lineHeight: '1.3',
                  },
                }}>
                <strong>Essential</strong>® design components for you.
              </Paragraph>

              {/* <!-- CARDS CONTAINER --> */}
              <Container
                size="3"
                css={{ overflowY: 'visible', height: 'auto', paddingTop: '10px', paddingBottom: '80px', px: '0px' }}>
                <Grid
                  css={{
                    height: 'auto',
                    gap: '10px',
                    gridTemplateColumns: '1fr 1fr',
                    '@sm': {
                      gap: '10px',
                      gridTemplateColumns: '1fr',
                    },
                  }}>
                  {/* <!-- BOX ONE --> */}
                  <Box>
                    <Card>
                      <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                        <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                          Ady® Interval
                        </Text>
                      </Box>
                    </Card>
                  </Box>

                  {/* <!-- BOX TWO --> */}
                  <Box>
                    <Card>
                      <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '20px' }}>
                        <Text size="2" css={{ fontWeight: '600', lineHeight: '1.2' }}>
                          Ady® Interval
                        </Text>
                      </Box>
                    </Card>
                  </Box>
                </Grid>
              </Container>
              {/* <!-- END CARDS CONTAINER --> */}
            </Container>
          </EightySection>

          <SocialSection />

          <AtelierSubscribe />

          <FooterMain />
        </CoverBox>
        {/* <!--
        <Image src={btrfly} alt="One" layout="fill" objectFit="cover" />
        --> */}
      </Box>
    </>
  );
};

export default AdyIndex;
