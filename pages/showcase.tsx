// REACT & NEXT IMPORTS
import Head from 'next/head';
import React from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import useNextBlurhash from 'use-next-blurhash';

// ATELIER® DESIGN SYSTEM
import { Navbar } from '@ui/app/Navbar';
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
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

const Showcase = () => {
  // useNextBlurhash(hash, width, height, puch);
  const [blurDataUrlOne] = useNextBlurhash(`98JQ]P{[`, 700, 360, 0);
  const [blurDataUrlTwo] = useNextBlurhash(`LAH2l{-n17D$.TM|OFxY%zR*Ipkr`, 700, 360, 0);
  const [blurDataUrlThree] = useNextBlurhash(`LFHo5304*L.E:gkk0r~l06^JpsV|`, 700, 360, 0);

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
          bc: '$slate1',
          overflow: 'auto',
          height: '100vh',
          '@md': {
            display: 'none',
          },
          '@sm': {
            display: 'none',
          },
        }}>
        <Section size="1">
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

            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/one.png"
              placeholder="blur"
              blurDataURL={blurDataUrlOne}
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
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
            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/five.png"
              placeholder="blur"
              blurDataURL={blurDataUrlTwo}
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
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

            <Image
              className="color__swirl"
              src="https://cdn.ady.systems/ady.images/four.png"
              placeholder="blur"
              blurDataURL={blurDataUrlThree}
              layout="fill"
              objectFit="cover"
              alt="image"
              objectPosition="absolute"
            />
          </ShowcaseComp>
        </Container>
      </Box>
    </Box>
  );
};

export default Showcase;
