import NextLink from 'next/link';

import { Box } from '@design-system/box';
import { Flex } from '@design-system/flex';
import { Text } from '@design-system/text';
import { Link } from '@design-system/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from '@components/ThemeToggle';

import { MenuNav } from './MenuNav';

export const Navbar = () => {
  return (
    <>
      <Flex
        as="header"
        css={{
          py: '12px',
          px: '5px',
          jc: 'space-between',
          position: 'fixed',
          m: '0',
          bc: '$light100',
          width: '100vw',
          backdropFilter: 'blur(10px)',
          saturate: '200%',
          borderBottomWidth: '1px',
          brc: '$lime9',

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
                fontFamily: '$neuewide',
                fontWeight: '800',
                fontSize: '18px',
                color: '$gray12',
                lineHeight: 'normal',
                letterSpacing: '-0.03rem',
              }}>
              ATELIER®
            </Text>
            {/*<Image className="logo" alt="logo" src="/butterfly_logo.svg" width={80} height={18} />*/}
          </Box>
        </NextLink>

        {/* NAVIGATION SECTION */}
        <Flex as="nav" css={{ ai: 'center', px: '0px', fontFamily: '$inter', fontSize: '12px' }}>
          <ThemeToggle /> {/* <!-- THEME SWITCH --> */}
          <NextLink href="/shop" passHref>
            <Link variant="subtle" css={{ mr: '$2', color: '$gray12', '@bp2': { mr: '$5' } }}>
              Shop <ArrowRightIcon />
            </Link>
          </NextLink>
          <NextLink href="https://docs.ady.world" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$5',
                '@bp2': { display: 'block', mr: '$5' },
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
                mr: '$5',
                '@bp2': { display: 'block', mr: '$5' },
              }}>
              Blog
            </Link>
          </NextLink>
          <NextLink href="/api/login" passHref>
            <Link
              variant="subtle"
              css={{
                display: 'none',
                color: '$gray12',
                mr: '$5',
                '@bp2': { display: 'block', mr: '$5' },
              }}>
              Login
            </Link>
          </NextLink>
          <Link
            variant="subtle"
            css={{
              display: 'block',
              color: '$gray12',
              mr: '$2',
              '@bp2': { display: 'block', mr: '$5' },
            }}>
            <MenuNav />
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
