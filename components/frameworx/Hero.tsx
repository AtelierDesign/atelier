import React from 'react';
import NextLink from 'next/link';
import Link from 'next/link';
import Image from 'next/image';
import { Section } from '@atelier/section';
import { Container } from '@atelier/container';
import { Box } from '@atelier/box';
import { Heading } from '@atelier/heading';
import { Flex } from '@atelier/flex';
import { Paragraph } from '@atelier/paragraph';
import { ExternalLinkIcon, RocketIcon } from '@radix-ui/react-icons';
import { AtelierButton } from '@ui/buttons/AtelierButton';
import { GradientButton } from '@ui/buttons/AtelierButton';
import { TimeCode } from '@fnctns/TimeCode';
import atelierLarge from '@public/svg/Atelier_Large.svg';

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

export const Hero = () => {
  return (
    <Section
      size="3"
      css={{
        backgroundColor: '$translucent',
      }}>
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

        {/* <!-- Header or Logo (Large) --> */}
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
          <strong>Atelier Design Yield</strong>?? is an ever??? expanding ecosystem of essential design components, created for designers by
          designers.
        </Paragraph>

        <Flex
          css={{
            zIndex: '2',
            '@bp2': {
              jc: 'center',
              my: '$6',
            },
          }}>
          <Link href="/shop" passHref>
            <AtelierButton color="blue">
              <span>Latest Release</span>
              {` `}
              <RocketIcon />
            </AtelierButton>
          </Link>

          <Link href="https://github.com/AtelierDesign/atelier" passHref>
            <AtelierButton color="ghost">
              <span>GitHub</span>
              <Box css={{ display: 'inline', ml: '$1' }}>
                <ExternalLinkIcon />
              </Box>
            </AtelierButton>
          </Link>
        </Flex>
      </Container>
    </Section>
  );
};
