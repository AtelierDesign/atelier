import React from 'react';
import NextLink from 'next/link';
import { Section } from '@design-system/section';
import { Container } from '@design-system/container';
import { Box } from '@design-system/box';
import { Grid } from '@design-system/grid';
import { Text } from '@design-system/text';
import { Separator } from '@design-system/separator';

export const Footer = () => {
  return (
    <Section size="3" css={{ position: 'relative', bottom: '0', right: '0', left: '0', margin: '0' }}>
      <Separator size="5" css={{ marginBottom: '40px' }} />
      <Container size="3" css={{ height: '130px', padding: '20px' }}>
        <Grid
          css={{
            gap: '$6',
            gridTemplateColumns: '1fr',
            '@bp1': {
              gap: '$7',
              gridTemplateColumns: '1fr'
            },
            '@bp2': {
              gap: '$7',
              gridTemplateColumns: '1fr 1fr 1fr 1fr'
            }
          }}
        >
          {/* LOGO SECTION (OR) 1ST LINK SECTION */}
          <Box>
            <Text as="p" css={{ fontSize: '14px', fontWeight: '800' }}>
              ATELIER DESIGN YIELD®
            </Text>
            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '25px',
                fontSize: '11px',
                textDecoration: 'none',
                pt: '2px'
              }}
            >
              Copyright © 2021.
            </Text>
          </Box>

          {/* 2nd LINK SECTION */}
          <Box>
            <Text as="p" css={{ fontSize: '14px', fontWeight: '700', pb: '10px' }}>
              Links
            </Text>
            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                ONE
              </NextLink>
            </Text>
            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                TWO
              </NextLink>
            </Text>

            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                THREE
              </NextLink>
            </Text>
            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                FOUR
              </NextLink>
            </Text>
          </Box>

          {/* 3rd LINK SECTION */}
          <Box>
            <Text as="p" css={{ fontSize: '14px', fontWeight: '700', pb: '10px' }}>
              Community
            </Text>
            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                ONE
              </NextLink>
            </Text>
            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                TWO
              </NextLink>
            </Text>

            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                THREE
              </NextLink>
            </Text>
            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                FOUR
              </NextLink>
            </Text>
          </Box>

          {/* 4th LINK SECTION */}
          <Box>
            <Text as="p" css={{ fontSize: '14px', fontWeight: '700', pb: '10px' }}>
              Community
            </Text>
            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                ONE
              </NextLink>
            </Text>
            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                TWO
              </NextLink>
            </Text>

            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                THREE
              </NextLink>
            </Text>
            <Text
              as="a"
              size={{
                '@initial': '4',
                '@bp1': '3'
              }}
              variant="gray"
              css={{
                lineHeight: '10px',
                fontSize: '12px',
                textDecoration: 'none',
                pt: '10px'
              }}
            >
              <NextLink href="/" passHref>
                FOUR
              </NextLink>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
