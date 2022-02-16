// REACT & NEXT IMPORTS
import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';

// ATELIER® DESIGN SYSTEM
import { Navbar } from '@ui/app/Navbar';
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import { FooterMain } from '@ui/app/FooterMain';

import { ShowcaseComp } from '@components/showcase/ShowcaseComp';

// STITCHES
import { styled } from 'stitches.config';

const HeadingBox = styled('div', {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '80%',
  height: '50%',
  margin: 'auto',
  padding: '20px',
});

const BLUR_DATA_ONE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAH0lEQVQImWNgYGDY3/1/377/Fz/+Z4CAS1//n3v4HwCYOQz6Nu+U2wAAAABJRU5ErkJggg==';

const BLUR_DATA_TWO =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAJUlEQVQImQEaAOX/AObi5Pr//9vR0sitrQAAAAD4+P/bzs7Nt7fz6hHmov42rQAAAABJRU5ErkJggg==';

const BLUR_DATA_THREE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAACCAIAAADwyuo0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAI0lEQVQImWNgYGDovHjs0peJ/3+lMjAwMCRtfZx/8tbnX/UAmYINTvh532kAAAAASUVORK5CYII=';

const Showcase = () => {
  return (
    <Box>
      <Head>
        <title>Showcase.</title>
      </Head>

      <Box>
        <Navbar />
      </Box>

      <Box
        css={{
          paddingBottom: '100px',
          bc: '$slate1',
          overflow: 'auto',
          height: '100vh',
          '@md': {
            // display: 'none',
          },
          '@sm': {
            // display: 'none',
          },
        }}>
        <Section size="2">
          <Container
            size="3"
            css={{ ai: 'center', paddingTop: '120px', paddingBottom: '40px', margin: 'auto', textAlign: 'center' }}>
            <Heading size="4">Showcase</Heading>
            <Text
              as="p"
              css={{ fontWeight: '700', fontSize: '11px', lineHeight: '4', color: '$blue8', fontFamily: '$neuewide' }}>
              ATELIER® IN USE
            </Text>
          </Container>
        </Section>

        <Container size="3" css={{}}>
          <ShowcaseComp>
            <HeadingBox>
              <Heading
                css={{
                  fontSize: '26px',
                  fontWeight: '600',

                  '@sm': {
                    fontSize: '22px',
                  },
                }}>
                <span>Showcase One</span>
              </Heading>
            </HeadingBox>
            <Box css={{ borderRadius: '0px' }}>
              <Image
                src="https://cdn.ady.systems/ady.images/one.png"
                placeholder="blur"
                blurDataURL={BLUR_DATA_ONE}
                layout="fill"
                objectFit="cover"
                alt="image"
                objectPosition="absolute"
              />
            </Box>
          </ShowcaseComp>
        </Container>

        <Container size="3" css={{}}>
          <ShowcaseComp>
            <HeadingBox>
              <Heading
                css={{
                  fontSize: '26px',
                  fontWeight: '600',

                  '@sm': {
                    fontSize: '22px',
                  },
                }}>
                <span>Showcase Two</span>
              </Heading>
            </HeadingBox>
            <Box css={{ borderRadius: '0px' }}>
              <Image
                src="https://cdn.ady.systems/ady.images/five.png"
                placeholder="blur"
                blurDataURL={BLUR_DATA_TWO}
                layout="fill"
                objectFit="cover"
                alt="image"
                objectPosition="absolute"
              />
            </Box>
          </ShowcaseComp>
        </Container>

        <Container size="3" css={{}}>
          <ShowcaseComp>
            <HeadingBox>
              <Heading
                css={{
                  fontSize: '26px',
                  fontWeight: '600',

                  '@sm': {
                    fontSize: '22px',
                  },
                }}>
                Showcase Three
              </Heading>
            </HeadingBox>
            <Box css={{ borderRadius: '0px' }}>
              <Image
                src="https://cdn.ady.systems/ady.images/four.png"
                placeholder="blur"
                blurDataURL={BLUR_DATA_THREE}
                layout="fill"
                objectFit="cover"
                alt="image"
                objectPosition="absolute"
              />
            </Box>
          </ShowcaseComp>
        </Container>

        <Container size="3" css={{ paddingBottom: '100px' }}>
          <ShowcaseComp>
            <HeadingBox>
              <Heading
                css={{
                  fontSize: '26px',
                  fontWeight: '600',

                  '@sm': {
                    fontSize: '22px',
                  },
                }}>
                Showcase Three
              </Heading>
            </HeadingBox>
            <Box css={{ borderRadius: '0px' }}>
              <Image
                src="https://cdn.ady.systems/ady.images/one.png"
                placeholder="blur"
                blurDataURL={BLUR_DATA_THREE}
                layout="fill"
                objectFit="cover"
                alt="image"
                objectPosition="absolute"
              />
            </Box>
          </ShowcaseComp>
        </Container>

        <FooterMain />
      </Box>
    </Box>
  );
};

export default Showcase;
