/*
 *  [ ATELIER DESIGN YIELD® ]
 *  2022-01-06
 *  All Rights Reserved.
 *  NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 *  See http://developer.ady.world/ for more information.
 */

// REACT + NEXT IMPORTS
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// ATELIER® DESIGN SYSTEM IMPORTS
import { Box } from '@atelier/box';
import { Text } from '@atelier/text';
import { Container } from '@atelier/container';
import { Grid } from '@atelier/grid';
import { Navbar } from '@ui/app/Navbar';
import { Hero } from '@components/Framework/Hero';
import { AdobeAe } from '@components/AdobeAe';
import { CommunityContainer } from '@components/CommunityContainer';
import { AtelierSubscribe } from '@components/Function/AtelierSubscribe';
import { ProductSection } from '@components/Framework/ProductSection';
import { AccordionComponent } from '@components/Function/Accordion';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';
import { EightySection } from '@components/EightySection';
import { FooterMain } from '@components/Framework/FooterMain';
import { GradientButton } from '@components/Buttons/AtelierButton';
import { DesktopPanel } from '@ui/index/MenuLink';

// IMAGES
import fourPng from '../public/img/four.png';

// COOKIE NOTICE
import { CookieNotice } from '@components/functions/CookieNotice';

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
  width: '100%',
  minWidth: '100vw',
  height: 'auto',
  backgroundColor: '',
  backgroundImage: 'url("")',
  display: 'block',
  position: 'relative',
  margin: '0',
  padding: '0',
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
const Atelier = () => {
  return (
    <>
      <Box css={{ padding: '0px', height: '100vh', zIndex: '0' }}>
        <Head>
          <title>Atelier®</title>
        </Head>

        <Box>
          <CookieNotice />
          <Navbar />
          <DesktopPanel />
          <Hero />
        </Box>

        <EightySection>
          <Container size="3" css={{ paddingTop: '120px' }}>
            <Heading
              size="4"
              css={{
                fontSize: '40px',
                fontFamily: '$neueplak',
                fontWeight: '400',
                textAlign: 'center',
                paddingBottom: '10px',
                '@sm': {
                  fontSize: '26px',
                  textAlign: 'left',
                  paddingBottom: '10px',
                },
              }}>
              <strong>ADY</strong>® Packs
            </Heading>

            <Paragraph
              size="2"
              css={{
                textAlign: 'center',
                fontSize: '18px',
                fontWeight: '500',
                lineHeight: '1.4',
                color: '$gray11',
                mb: '40px',
                '@sm': {
                  textAlign: 'left',
                  fontSize: '16px',
                },
                '@bp2': {
                  ta: 'center',
                  mb: '60px',
                  lineHeight: '1.3',
                },
                '@bp3': {
                  ta: 'center',
                  mb: '60px',
                  lineHeight: '1.3',
                },
              }}>
              <strong>Essential</strong>® design components for your projects.
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
                    <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '30px' }}>
                      <Text size="2" css={{ fontWeight: '800', lineHeight: '1.2' }}>
                        SFX. 001
                      </Text>
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

                {/* <!-- BOX TWO --> */}
                <Box>
                  <Card>
                    <Box css={{ position: 'absolute', bottom: '0', left: '0', margin: '30px' }}>
                      <Text size="2" css={{ fontWeight: '800', lineHeight: '1.2' }}>
                        INTERVAL. v001
                      </Text>
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
              </Grid>
            </Container>

            {/* <!-- ADOBE® AE SECTION --> */}
            <Container size="3" css={{ padding: '0', margin: '0' }}>
              <AdobeAe />
            </Container>

            {/* <!-- END CARDS CONTAINER --> */}
          </Container>
        </EightySection>

        {/* <!-- PRODUCT SECTION --> */}
        <ProductSection />

        {/* <!-- ACCORDION --> */}
        <Container size="2" css={{ alignItems: 'center', textAlign: 'center', margin: 'auto' }}>
          <AccordionComponent />
        </Container>

        {/* <!-- SUBSCRIBE COMPONENT --> */}
        <AtelierSubscribe />

        {/* <!-- SOCIAL & COMMUNITY --> */}
        <CommunityContainer />

        {/* <!-- END FOOTER --> */}
        <FooterMain />
      </Box>
    </>
  );
};

export default Atelier;
