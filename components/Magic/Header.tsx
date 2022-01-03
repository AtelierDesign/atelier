import NextLink from 'next/link';
import { useContext } from 'react';
import Router from 'next/router';
import { magic } from '@lib/magic';
import { UserContext } from '@lib/UserContext';
import { Box } from '@design-system/box';
import { Flex } from '@design-system/flex';
import { Text } from '@design-system/text';
import { Link } from '@design-system/link';
import { ThemeToggle } from '@components/ThemeToggle';

export const Header = () => {
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    magic.user.logout().then(() => {
      setUser({ user: null });
      Router.push('/login');
    });
  };

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
          </Box>
        </NextLink>

        {/* NAVIGATION SECTION */}
        <Flex as="nav" css={{ ai: 'center', px: '0px', fontFamily: '$inter', fontSize: '12px' }}>
          <ThemeToggle /> {/* <!-- THEME SWITCH --> */}
          <NextLink>
            <Link
              onClick={logout}
              variant="subtle"
              css={{
                color: '$gray12',
                mr: '$5',
                '@bp2': { display: 'block', mr: '$5' },
              }}>
              Logout
            </Link>
          </NextLink>
        </Flex>
      </Flex>
    </>
  );
};
