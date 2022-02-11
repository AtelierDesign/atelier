import React from 'react';
import Router from 'next/router';
import NextLink from 'next/link';

// ATELIER® DESIGN SYSTEM
import { Box } from '@atelier/box';
import { Flex } from '@atelier/flex';
import { Text } from '@atelier/text';
import { Link } from '@atelier/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';

// Stitches
import { ThemeSwitch } from '@ui/app/ThemeSwitch';

export const CoverFooter = () => {
  return (
    <>
      <Flex
        as="footer"
        css={{
          py: '11px',
          px: '5px',
          jc: 'space-between',
          position: 'fixed',
          bottom: '0',
          left: '0',
          right: '0',
          margin: '0',
          backgroundColor: '$translucent',
          width: '100vw',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          saturate: '300%',

          zIndex: '9999',
        }}>
        {/* <!-- LOGO SECTION --> */}
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              ml: '$2',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '$5' },
            }}>
            <Text
              css={{
                zIndex: '999',
                fontFamily: '$neuewide',
                fontWeight: '800',
                fontSize: '14px',
                color: '$gray8',
                lineHeight: '30px',
                letterSpacing: '-0.03rem',
                mixBlendMode: 'overlay',

                '&:hover': {
                  color: '$gray11',
                  mixBlendMode: 'difference',
                },
              }}>
              ATELIER®
            </Text>
          </Box>
        </NextLink>

        {/* NAVIGATION SECTION */}
        <Flex
          as="nav"
          css={{
            ai: 'center',
            px: '0px',
            fontFamily: '$inter',
            fontSize: '12px',
            '@sm': {
              display: 'none',
            },
          }}>
          <NextLink href="/subscribe" passHref>
            <Link variant="subtle" css={{ marginRight: '$3', color: '$gray12', '@sm': { marginRight: '$2' } }}>
              Subscribe <ArrowRightIcon />
            </Link>
          </NextLink>

          <NextLink href="/twitter" passHref>
            <Link variant="subtle" css={{ marginRight: '$3', color: '$gray12', '@sm': { marginRight: '$2' } }}>
              Twitter
            </Link>
          </NextLink>

          <NextLink href="/github" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
              }}>
              GitHub
            </Link>
          </NextLink>
          <NextLink href="/discord" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$5' },
              }}>
              Discord
            </Link>
          </NextLink>
        </Flex>
        {/* <!-- JSX ELEMENT --> */}

        <Flex as="nav" css={{ ai: 'center', px: '0px', fontFamily: '$inter', fontSize: '12px' }}>
          {/* <!-- JSX ELEMENT --> */}

          <ThemeSwitch />

          <NextLink href="/" passHref>
            <Link
              variant="subtle"
              css={{
                fontSize: '12px',
                display: 'block',
                color: '$gray8',
                mr: '$5',

                '&:hover': {
                  color: '$gray11',
                },

                '@sm': { display: 'block', mr: '$3' },
              }}>
              ©2022
            </Link>
          </NextLink>
          {/* <!-- -->*/}
        </Flex>
      </Flex>
    </>
  );
};
