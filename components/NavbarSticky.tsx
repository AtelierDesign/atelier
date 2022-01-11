import NextLink from 'next/link';

import { Box } from '@atelier/box';
import { Flex } from '@atelier/flex';
import { Text } from '@atelier/text';
import { Link } from '@atelier/link';
import { ThemeSwitch } from '@components/ThemeSwitch';
import { FalldownMenu } from '@components/Function/FalldownMenu';

// MAGIC
import { useContext } from 'react';
import router from 'next/router';

export const NavbarSticky = () => {
  return (
    <>
      <Flex
        as="header"
        css={{
          py: '11px',
          px: '5px',
          jc: 'space-between',
          position: 'fixed',
          margin: '0',
          backgroundColorc: '$light100',
          width: '100vw',
          backdropFilter: 'blur(10px)',
          saturate: '300%',

          zIndex: '9999',
        }}>
        {/* <!-- LOGO SECTION --> */}
        <NextLink href="/atelier" passHref>
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
                fontSize: '18px',
                color: '$gray12',
                lineHeight: '30px',
                letterSpacing: '-0.03rem',
              }}>
              ATELIER®
            </Text>
            {/*<Image className="logo" alt="logo" src="/butterfly_logo.svg" width={80} height={18} />*/}
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
          {/* // <!-- NEED A LABEL? --> // Uncomment
          <Text css={{ fontSize: '12px', marginRight: '$2' }}>Theme</Text>
          */}

          {/* <!-- THEME SWITCH --> */}
          <ThemeSwitch />
          <NextLink href="/shop" passHref>
            <Link variant="subtle" css={{ marginRight: '$3', color: '$gray12', '@sm': { marginRight: '$2' } }}>
              Shop
            </Link>
          </NextLink>

          <NextLink href="/atelier" passHref>
            <Link variant="subtle" css={{ marginRight: '$3', color: '$gray12', '@sm': { marginRight: '$2' } }}>
              Moods
            </Link>
          </NextLink>

          <NextLink href="https://docs.ady.world" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$3' },
              }}>
              Documentation
            </Link>
          </NextLink>
          <NextLink href="https://developer.ady.world" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$3',
                '@bp2': { display: 'block', mr: '$5' },
              }}>
              Blog
            </Link>
          </NextLink>
        </Flex>
        {/* <!-- JSX ELEMENT --> */}

        <Flex as="nav" css={{ ai: 'center', px: '0px', fontFamily: '$inter', fontSize: '12px' }}>
          {/* <!-- JSX ELEMENT --> */}
          <Link
            href="/"
            variant="subtle"
            css={{
              fontSize: '13px',
              color: '$white',
              // backgroundColor: '$crimson9',
              // border: '1px solid $crimson9',
              backgroundColor: '$lime9',
              border: '0px solid $crimson9',
              borderRadius: '6px',
              paddingTop: '6px',
              paddingBottom: '6px',
              paddingLeft: '10px',
              paddingRight: '10px',
              mr: '$3',
              '@sm': { display: 'none', mr: '$3' },
              '&:hover': { cursor: 'pointer' },
            }}>
            Sign In
          </Link>
          {/* <!-- -->*/}

          <FalldownMenu />
        </Flex>
      </Flex>
    </>
  );
};
