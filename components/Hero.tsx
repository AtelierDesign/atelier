import React from 'react';
import NextLink from 'next/link';
import { Section } from '@atelier/section';
import { Container } from '@atelier/container';
import { Box } from '@atelier/box';
import { Heading } from '@atelier/heading';
import { Flex } from '@atelier/flex';
import { Paragraph } from '@atelier/paragraph';
import { ExternalLinkIcon, RocketIcon } from '@radix-ui/react-icons';
import { DefaultButton } from '@components/DefaultButton';
import { Button } from '@components/Buttons/AtelierButton';
import { TimeCode } from '@components/Time/TimeCode';
// import { HeroContainer } from '@components/HeroContainer';

// STITCHES STYLED
import { styled } from 'stitches.config';

const TimeDisplay = styled('div', {
  position: 'relative',
  alignItems: 'center',
  textAlign: 'center',
  margin: 'auto',
  paddingBottom: '20px',
  fontFamily: '$jetbrain',
  fontSize: '13px',
  fontWeight: '700',
  color: '$gray12',
  zIndex: '200',
  lineHeight: '1',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  '@sm': {
    alignItems: 'left',
    textAlign: 'left',
  },
  '&:hover': {
    cursor: 'auto',
  },
});

export function Hero() {
  return (
    <Box css={{ height: '100%', zIndex: '20' }}>
      <Section size="3" css={{ bc: 'transparent' }}>
        <Container
          size="2"
          css={{
            paddingTop: '140px',
            paddingBottom: '60px',
            paddingLeft: '100px',
            paddingRight: '100px',
            '@sm': {
              paddingTop: '140px',
              paddingBottom: '100px',
              paddingLeft: '0px',
              paddingRight: '40px',
            },
          }}>
          {/* TIME DISPLAY */}
          <TimeDisplay>
            <TimeCode />
          </TimeDisplay>
          {/* END TIME DISPLAY */}

          <Heading
            size="4"
            css={{
              fontFamily: '$inter',
              fontWeight: '900',
              fontSize: '70px',
              mb: '$2',
              textAlign: 'center',
              '@sm': {
                textAlign: 'left',
                fontSize: '44px',
              },
            }}>
            Welcome.
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
            <strong>Atelier Design Yield</strong>® is an ever– expanding ecosystem of raw, unstyled, and modern design
            components.
          </Paragraph>

          <Flex css={{ '@bp2': { jc: 'center', my: '$6' } }}>
            <NextLink href="/shop" passHref>
              <Button color="lime" css={{ width: 'auto', lineHeight: '1', mr: '$2', color: '$white' }}>
                Latest Release
                {` `}
                <RocketIcon />
              </Button>
            </NextLink>

            <Button
              color="ghost"
              as="a"
              href="https://github.com/AtelierDesign"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
              <Box css={{ ml: '$1' }}>
                <ExternalLinkIcon />
              </Box>
            </Button>
          </Flex>
        </Container>
      </Section>
    </Box>
  );
}
