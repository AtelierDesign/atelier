import NextLink from 'next/link';
import { Box } from '@design-system/box';
import { Flex } from '@design-system/flex';
import { Link } from '@design-system/link';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { ThemeToggle } from '@components/ThemeToggle';

import Image from 'next/image';

export const Navbar = () => {
  return (
    <Flex
      as="header"
      css={{
        py: '$3',
        px: '5px',
        jc: 'space-between',
        position: 'fixed',
        m: '0',
        zIndex: '100',
        bc: '$light100',
        width: '100vw',
        backdropFilter: 'blur(10px)',
        saturate: '200%',
        borderBottomWidth: '1px',
        brc: '$lime9'
      }}>
      {/* LOGO SECTION */}
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            ml: '$1',
            color: '$hiContrast',
            display: 'inline-flex',
            textDecoration: 'none',
            '&:focus': {
              boxShadow: 'none'
            },
            '@bp2': { ml: '$5' }
          }}>
          <Image className="logo" alt="logo" src="/butterfly_logo.svg" width={80} height={18} />
        </Box>
      </NextLink>

      {/* NAVIGATION SECTION */}
      <Flex as="nav" css={{ ai: 'center', px: '0px' }}>
        <ThemeToggle />
        <NextLink href="https://docs.ady.world" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$5' } }}>
            Shop <ArrowRightIcon />
          </Link>
        </NextLink>

        <NextLink href="https://docs.ady.world" passHref>
          <Link variant="subtle" css={{ display: 'none', mr: '$5', '@bp2': { display: 'block', mr: '$5' } }}>
            Documentaion
          </Link>
        </NextLink>

        <NextLink href="https://docs.ady.world" passHref>
          <Link variant="subtle" css={{ display: 'none', mr: '$5', '@bp2': { display: 'block', mr: '$5' } }}>
            Resources
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  );
};
