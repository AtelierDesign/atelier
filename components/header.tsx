import NextLink from 'next/link';
import { Box } from '@design-system/box';
import { Flex } from '@design-system/flex';
import { Link } from '@design-system/link';
import { Heading } from '@design-system/heading';
import { Text } from '@design-system/text';
import { ThemeToggle } from '@components/ThemeToggle';

export function Header() {
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
        backdropFilter: 'blur(25px)',
        saturate: '300%',
        borderBottomWidth: '1px',
        brc: '$lime9'
      }}
    >
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            color: '$hiContrast',
            display: 'inline-flex',
            textDecoration: 'none',
            '&:focus': {
              boxShadow: 'none'
            }
          }}
        >
          <Heading css={{ fontSize: '18px', fontWeight: '800', pl: '10px' }}>ATELIER®</Heading>
        </Box>
      </NextLink>
      <Flex as="nav" css={{ ai: 'center' }}>
        <ThemeToggle />
        <NextLink href="https://docs.ady.world" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$5' } }}>
            <Text>Docs</Text>
          </Link>
        </NextLink>
        <NextLink href="/design-system" passHref>
          <Link variant="subtle" css={{ mr: '$5', '@bp2': { mr: '$5' } }}>
            <Text>System</Text>
          </Link>
        </NextLink>
        <Link
          href="https://github.com/AtelierDesign"
          variant="subtle"
          css={{
            mr: '$5',
            display: 'none',
            '@bp1': { display: 'block' },
            '@bp2': { mr: '$5' }
          }}
        >
          <Text>GitHub</Text>
        </Link>
        <Link
          href="https://discord.com/invite/H4eG3Mk"
          variant="subtle"
          css={{ mr: '$5', '@bp2': { mr: '$5' } }}
        >
          <Text>Twitter</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
