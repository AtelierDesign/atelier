// REACT + NEXT IMPORTS
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

// ATELIER DESIGN SYSTEM IMPORTS
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import { Paragraph } from '@atelier/paragraph';
import { Navbar } from '@components/Navbar';
import { FooterMain } from '@components/FooterMain';
import { DefaultButton } from '@components/DefaultButton';
import { Hero } from '@components/Hero';
import { SmallSpacer } from '@components/SmallSpacer';
import { Line } from '@components/Line';
import { OneCol } from '@components/OneCol';
import { SocialSection } from '@components/SocialSection';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { CursorArrowIcon } from '@radix-ui/react-icons';

// STITCH IMPORTS
import { styled } from '@stitches/react';

// STYLED
const GridX = styled('div', {
  flow: 'column',
  overflowX: 'scroll',
  overflowY: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
});

const Scroller = styled('div', {
  width: '100%',
  height: 'auto',
  backgroundColor: '$slate1',
  display: 'inline-flex',

  overflowX: 'scroll',
  overflowY: 'hidden',

  padding: '18px',
});

const Card = styled('div', {
  width: '420px',
  minWidth: '420px',
  height: '300px',
  backgroundColor: '$slate3',
  display: 'block',
  position: 'relative',
  border: '1px solid',
  borderColor: '$slate5',

  borderRadius: '32px',
  marginTop: '18px',
  padding: '30px',
  alignItems: 'center',
  webkitScrollbar: 'none',
});

const ImageButton = styled('button', {
  zIndex: '400',
  fontFamily: '$jetbrain',
  fontWeight: '700',
  fontSize: '13px',
  backgroundColor: '$slate8',
  color: 'white',
  paddingLeft: '30px',
  paddingRight: '30px',
  py: '6px',
  height: '32px',
  borderRadius: '10px',
  border: '1px solid',
  borderColor: '$sky11',
  lineHeight: '1',
  width: 'auto',
  position: 'absolute',
  bottom: '0',
  left: '30px',
  marginBottom: '32px',

  '&:hover': {
    backgroundColor: '$slate7',
    color: '$sky11',
    cursor: 'pointer',
  },
});

const SmallText = styled('p', {
  fontFamily: '$jetbrain',
  fontWeight: '600',
  fontSize: '12px',
  backgroundColor: '$gray7',
  color: '$sky11',
  paddingLeft: '7px',
  paddingRight: '5px',
  paddingTop: '3px',
  paddingBottom: '1px',

  position: 'absolute',
  bottom: '0',
  left: '33px',
  marginBottom: '72px',
});

const ImageArrow = styled('button', {
  zIndex: '400',
  fontSize: '14px',
  backgroundColor: 'transparent',
  color: '$slate12',
  paddingLeft: '30px',
  paddingRight: '30px',
  py: '6px',
  height: '32px',
  borderRadius: '10px',
  border: '0px solid',
  borderColor: '$sky11',
  lineHeight: '1',
  width: 'auto',
  position: 'absolute',
  bottom: '0',
  right: '150px',
  marginBottom: '32px',

  '&:hover': {
    backgroundColor: '$slate7',
    color: '$sky11',
    cursor: 'pointer',
  },
});

// APP BEGIN / HOMEPAGE
const Atelier = () => {
  return (
    <div>
      <Head>
        <title>Atelier®</title>
      </Head>

      <Box>
        {/* <!-- NAVBAR, HERO, ONE COLUMN SPANNER, AND SPACER --> */}
        <Navbar />
        <Hero />
        <OneCol />
        <SmallSpacer />

        <Box css={{ paddingBottom: '50px', bc: '$slate1' }}>
          <Container size="3" css={{ paddingLeft: '30px', bc: 'none' }}>
            <Text
              css={{
                fontSize: '13px',
                color: '$gray11',
                fontWeight: '500',
                lineHeight: '2',
                paddingLeft: '6px',
              }}>
              <strong>Adobe</strong>® After Effects
            </Text>
            <Heading size="3" css={{ fontWeight: '600', paddingLeft: '5px', color: '$gray12' }}>
              Style made easy.
            </Heading>
            <Paragraph
              size="2"
              css={{
                fontFamily: '$inter',
                fontWeight: '500',
                color: '$gray10',
                lineHeight: '1.4',
                px: '5px',
                py: '15px',
                fontSize: '16px',
                width: '80%',
              }}>
              Create open and close animations that take the dropdown menu’s actual position into account.
            </Paragraph>
            <DefaultButton as="a" css={{}}>
              Learn more <ArrowRightIcon />
            </DefaultButton>
          </Container>
        </Box>

        <Line />
        <SmallSpacer />

        {/* OVERFLOW X SCROLL CONTAINER */}
        <Box css={{ bc: '$slate1' }}>
          <Scroller className="scroll-container">
            <GridX className="scroll-grid">
              {/* INSERT CARD COMPONENT WITH CHILDREN */}
              {/* <Card> .. children .. </Card> */}
              <Card>
                <Box css={{ zIndex: '9999' }}>
                  <Heading size="2" css={{ fontWeight: '600' }}>
                    Sound.
                  </Heading>
                  <Text
                    as="p"
                    // variant="gray"
                    size="3"
                    className="image-text"
                    css={{
                      fontFamily: '$inter',
                      color: '$gray12',
                      width: '94%',
                      fontSize: '13px',
                      fontWeight: '500',
                      paddingTop: '12px',
                      lineHeight: '22px',
                      zIndex: '9999',
                    }}>
                    Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </Text>
                  <SmallText>From $19.99</SmallText>
                  <ImageButton>Buy Now</ImageButton>
                  <ImageArrow>
                    /{` `}
                    <ArrowRightIcon />
                  </ImageArrow>
                </Box>
                <Image
                  className="color__swirl"
                  src="https://cdn.ady.systems/ady.images/one.png"
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  objectPosition="absolute"
                  priority
                />
              </Card>

              {/* CARD 02 */}
              <Card>
                <Heading size="2" css={{ fontWeight: '600', zIndex: '300' }}>
                  Style.
                </Heading>
                <Text
                  as="p"
                  variant="gray"
                  size="3"
                  className="image-text"
                  css={{
                    fontFamily: '$inter',
                    fontSize: '13px',
                    zIndex: '300',
                    width: '94%',
                    fontWeight: '400',
                    paddingTop: '16px',
                    lineHeight: '22px',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </Text>
                <SmallText>From $19.99</SmallText>
                <ImageButton>Buy Now</ImageButton>
                <Image
                  className="color__swirl"
                  src="https://cdn.ady.systems/ady.images/five.png"
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  objectPosition="absolute"
                  priority
                />
              </Card>

              {/* CARD 03 */}
              <Card>
                <Heading size="2" css={{ fontWeight: '600' }}>
                  Texture.
                </Heading>
                <Text
                  as="p"
                  variant="gray"
                  size="3"
                  className="image-text"
                  css={{
                    fontFamily: '$inter',
                    fontSize: '13px',
                    zIndex: '300',
                    width: '94%',
                    fontWeight: '400',
                    paddingTop: '16px',
                    lineHeight: '22px',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </Text>
                <SmallText>From $19.99</SmallText>
                <ImageButton>Buy Now</ImageButton>
                <Image
                  className="color__swirl"
                  src="https://cdn.ady.systems/ady.images/three.png"
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  objectPosition="absolute"
                  priority
                />
              </Card>

              {/* CARD 04 */}
              <Card>
                <Heading size="2" css={{ fontWeight: '600' }}>
                  Motion.
                </Heading>
                <Text
                  as="p"
                  variant="gray"
                  size="3"
                  className="image-text"
                  css={{
                    fontFamily: '$inter',
                    fontSize: '13px',
                    zIndex: '300',
                    width: '94%',
                    fontWeight: '400',
                    paddingTop: '16px',
                    lineHeight: '22px',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </Text>
                <SmallText>From $19.99</SmallText>
                <ImageButton>Buy Now</ImageButton>
                <Image
                  className="color__swirl"
                  src="https://cdn.ady.systems/ady.images/four.png"
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  objectPosition="absolute"
                  priority
                />
              </Card>

              {/* CARD 05 */}
              <Card>
                <Heading size="2" css={{ fontWeight: '600' }}>
                  Type.
                </Heading>
                <Text
                  as="p"
                  variant="gray"
                  size="3"
                  className="image-text"
                  css={{
                    fontFamily: '$inter',
                    fontSize: '13px',
                    zIndex: '300',
                    width: '94%',
                    fontWeight: '400',
                    paddingTop: '16px',
                    lineHeight: '22px',
                  }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </Text>
                <SmallText>From $19.99</SmallText>
                <ImageButton>Buy Now</ImageButton>
                <Image
                  className="color__swirl"
                  src="https://cdn.ady.systems/ady.images/five.png"
                  layout="fill"
                  objectFit="cover"
                  alt="image"
                  objectPosition="absolute"
                  priority
                />
              </Card>
            </GridX>
          </Scroller>
        </Box>

        {/* END --- OVERFLOW X SCROLL CONTAINER */}
      </Box>
      <SmallSpacer />
      <Line />

      {/* COMMUNITY CONTAINER */}

      <Box css={{ bc: '$slate1', margin: '0', px: '0' }}>
        <Section size="3">
          <Heading size="3" css={{ textAlign: 'center', fontWeight: '800' }}>
            Atelier® Community.
          </Heading>
          <Text css={{ textAlign: 'center', lineHeight: '3' }}>
            Get involved. Get inspired.{` `}
            <CursorArrowIcon />
          </Text>
          <Container size="3" css={{ jc: 'center', ai: 'center', margin: 'auto' }}>
            <SocialSection />
          </Container>
        </Section>
      </Box>

      {/* END --- COMMUNITY CONTAINER */}

      <FooterMain />
    </div>
  );
};

export default Atelier;
