import React from 'react';
import NextLink from 'next/link';
import { Section } from '@design-system/section';
import { Container } from '@design-system/container';
import { Box } from '@design-system/box';
import { Heading } from '@design-system/heading';
import { Grid } from '@design-system/grid';
import { Flex } from '@design-system/flex';
import { Text } from '@design-system/text';
import { Paragraph } from '@design-system/paragraph';
import { theme } from 'stitches.config';
import { ExternalLinkIcon, RocketIcon, CopyIcon, CheckIcon } from '@radix-ui/react-icons';
import { HomeButton } from '@components/HomeButton';
import { Button } from '@design-system/button';
import copy from 'copy-to-clipboard';

export function Hero() {
  const [hasCopied, setHasCopied] = React.useState(false);

  return (
    <Box css={{ bc: '$slate1' }}>
      <Section
        size={{
          '@initial': '2',
          '@bp1': '3'
        }}
        css={{
          pt: '$3',
          '@bp2': {
            pt: '$6'
          }
        }}
      >
        <Container size="3" css={{ paddingTop: '120px' }}>
          <Heading
            size="4"
            css={{
              mb: '$3',
              '@bp1': {
                pr: 100
              },
              '@bp2': {
                ta: 'center',
                px: 180
              },
              '@bp3': {
                px: 200
              }
            }}
          >
            ATELIER DESIGN YIELD
          </Heading>
          <Paragraph
            size="2"
            css={{
              mb: '$6',
              '@bp2': {
                mx: 230,
                ta: 'center',
                mb: '$7'
              }
            }}
          >
            CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience.
          </Paragraph>
          <Flex css={{ '@bp2': { jc: 'center', my: '$7' } }}>
            <NextLink href="https://ady.world" passHref>
              <HomeButton as="a" color="blue" css={{ mr: '$3' }}>
                Latest Release
                <Box css={{ ml: '$2' }}>
                  <RocketIcon />
                </Box>
              </HomeButton>
            </NextLink>
            <HomeButton as="a" href="https://github.com/AtelierDesign" target="_blank" rel="noopener noreferrer">
              GitHub
              <Box css={{ ml: '$1' }}>
                <ExternalLinkIcon />
              </Box>
            </HomeButton>
          </Flex>
        </Container>

        <Container size={{ '@initial': '3', '@bp1': '1' }} css={{ my: '$6', position: 'relative', zIndex: '1', '@bp2': { my: '$8' } }}>
          <Flex
            css={{
              boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.08)',
              borderRadius: '$4',
              fontFamily: '$mono',
              fontSize: '$2',
              lineHeight: 1,
              ai: 'center',
              height: '$7',
              color: '$hiContrast',
              backgroundColor: 'rgba(0,0,0,.01)',
              px: '$4',
              jc: 'space-between',
              '.dark-theme &': {
                backgroundColor: 'rgba(255,255,255,.04)',
                boxShadow: 'none'
              }
            }}
          >
            <Box>npm install @atelier/design</Box>
            <Button
              css={{ color: '$slate11', mr: '-$1' }}
              aria-label="Copy the install snippet to Clipboard"
              onClick={() => {
                copy('npm install @atelier/design');
                setHasCopied(true);
              }}
            >
              {hasCopied ? <CheckIcon /> : <CopyIcon />}
            </Button>
          </Flex>
        </Container>

        <Container size="3" css={{ paddingTop: '50px' }}>
          <Grid
            css={{
              gap: '$6',
              gridTemplateColumns: '1fr',
              '@bp1': {
                gap: '$7',
                gridTemplateColumns: '1fr 1fr'
              },
              '@bp2': {
                gap: '$7',
                gridTemplateColumns: '1fr 1fr 1fr'
              }
            }}
          >
            <Box>
              <Flex
                css={{
                  ai: 'center',
                  jc: 'center',
                  width: '$7',
                  height: '$7',
                  borderRadius: '12px',
                  backgroundColor: '$violet5',
                  color: '$violet10',
                  mb: '$4'
                }}
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 10.8333L14.1667 0.833328L4.91669 14.1667H13L10.8334 24.1667L20.0834 10.8333H12Z"
                    stroke={theme.colors.violet11.computedValue}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.15"
                    d="M12 10.8333L14.1667 0.833328L4.91669 14.1667H13L10.8334 24.1667L20.0834 10.8333H12Z"
                    fill={theme.colors.violet11.computedValue}
                  />
                </svg>
              </Flex>
              <Heading as="h4" css={{ mb: '$2' }}>
                Atelier
              </Heading>
              <Text
                as="p"
                size={{
                  '@initial': '4',
                  '@bp1': '3'
                }}
                variant="gray"
                css={{
                  lineHeight: '25px'
                }}
              >
                Stitches avoids unnecessary prop interpolations at runtime, making it more performant than other styling libraries.
              </Text>
            </Box>
            <Box>
              <Flex
                css={{
                  ai: 'center',
                  jc: 'center',
                  width: '$7',
                  height: '$7',
                  borderRadius: '12px',
                  backgroundColor: '$violet5',
                  color: '$violet10',
                  mb: '$4'
                }}
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.8333 3.5H21.5H23.1667M21.5 1.83334V5.16667"
                    stroke={theme.colors.blue11.computedValue}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19.8333 11.8333H21.5H23.1667M21.5 10.1667V13.5"
                    stroke={theme.colors.blue11.computedValue}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11.5 3.5H13.1667H14.8333M13.1667 1.83334V5.16667"
                    stroke={theme.colors.blue11.computedValue}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="1.34436"
                    y="21.7846"
                    width="23.25"
                    height="2.60442"
                    transform="rotate(-45 1.34436 21.7846)"
                    stroke={theme.colors.blue11.computedValue}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    opacity="0.1"
                    x="2.22824"
                    y="21.7846"
                    width="22"
                    height="1.35442"
                    transform="rotate(-45 2.22824 21.7846)"
                    fill={theme.colors.blue11.computedValue}
                  />
                  <rect
                    opacity="0.15"
                    x="2.22824"
                    y="21.7846"
                    width="15.8968"
                    height="1.35442"
                    transform="rotate(-45 2.22824 21.7846)"
                    fill={theme.colors.blue11.computedValue}
                  />
                  <rect
                    x="1.34436"
                    y="21.7846"
                    width="17.1468"
                    height="2.60442"
                    transform="rotate(-45 1.34436 21.7846)"
                    stroke={theme.colors.blue11.computedValue}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Flex>
              <Heading as="h4" css={{ mb: '$2' }}>
                Design
              </Heading>
              <Text
                as="p"
                size={{
                  '@initial': '4',
                  '@bp1': '3'
                }}
                variant="gray"
                css={{
                  lineHeight: '25px'
                }}
              >
                Packed full of useful features like theming, smart tokens, prop, utils, and a fully-typed API.
              </Text>
            </Box>
            <Box>
              <Flex
                css={{
                  ai: 'center',
                  jc: 'center',
                  width: '$7',
                  height: '$7',
                  borderRadius: '12px',
                  backgroundColor: '$violet5',
                  color: '$violet10',
                  mb: '$4'
                }}
              >
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.572 21.68L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.68C5.428 21.68 8 21.75 12.5 21.75C17 21.75 19.572 21.68 19.572 21.68Z"
                    stroke={theme.colors.violet11.computedValue}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    opacity="0.1"
                    d="M19.572 21.18L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.18C5.428 21.18 8 21.75 12.5 21.75C17 21.75 19.572 21.18 19.572 21.18Z"
                    fill={theme.colors.violet11.computedValue}
                  />
                  <path
                    opacity="0.15"
                    d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z"
                    fill={theme.colors.violet11.computedValue}
                  />
                  <path
                    d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z"
                    stroke={theme.colors.violet11.computedValue}
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.34 20.94C1.34 20.94 4.44 21.8 12.5 21.8C20.56 21.8 23.66 20.94 23.66 20.94"
                    stroke={theme.colors.violet11.computedValue}
                    strokeWidth="1.67"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Flex>
              <Heading as="h4" css={{ mb: '$2' }}>
                Yield
              </Heading>
              <Text
                as="p"
                size={{
                  '@initial': '4',
                  '@bp1': '3'
                }}
                variant="gray"
                css={{
                  lineHeight: '25px'
                }}
              >
                Stitches has a fully-typed API, to minimize the learning curve, and provide the best possible developer experience.
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
}
