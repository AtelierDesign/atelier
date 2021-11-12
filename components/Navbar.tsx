import NextLink from 'next/link';
import { Box } from '@design-system/box';
import { Flex } from '@design-system/flex';
import { Link } from '@design-system/link';
import { ThemeToggle } from '@components/ThemeToggle';

import Image from 'next/image';

export const Navbar = () => {
  return (
    <Flex
      as="header"
      css={{
        py: '$3',
        px: '$1',
        jc: 'space-between',
        position: 'fixed',
        m: '0',
        zIndex: '1',
        bc: '$light100',
        width: '100vw',
        backdropFilter: 'blur(10px)',
        saturate: '200%',
        borderBottomWidth: '1px',
        brc: '$lime9'
      }}
    >
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            ml: '$2',
            color: '$hiContrast',
            display: 'inline-flex',
            textDecoration: 'none',
            '&:focus': {
              boxShadow: 'none'
            },
            '@bp2': { ml: '$5' }
          }}
        >
          <Image className="logo" alt="logo" src="/butterfly_logo.svg" width={110} height={20} />
        </Box>
      </NextLink>

      {/* NAVIGATION SECTION */}
      <Flex as="nav" css={{ ai: 'center', px: '0px' }}>
        <ThemeToggle />
        <NextLink href="https://docs.ady.world" passHref>
          <Link variant="subtle" css={{ mr: '$2', '@bp2': { mr: '$5' } }}>
            Docs
          </Link>
        </NextLink>
        <NextLink href="/design-system" passHref>
          <Link variant="subtle" css={{ mr: '$2', '@bp2': { mr: '$5' } }}>
            System
          </Link>
        </NextLink>
        <Link
          href="https://github.com/AtelierDesign"
          variant="subtle"
          css={{
            mr: '$2',
            display: 'none',
            '@bp1': { display: 'block' },
            '@bp2': { mr: '$5' }
          }}
        >
          GitHub
        </Link>
        <Link
          href="https://github.com/AtelierDesign"
          variant="subtle"
          css={{
            mr: '$2',
            display: 'none',
            '@bp1': { display: 'block' },
            '@bp2': { mr: '$5' }
          }}
        >
          Twitter
        </Link>
      </Flex>
    </Flex>
  );
};
