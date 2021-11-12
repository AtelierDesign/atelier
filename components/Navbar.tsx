import NextLink from 'next/link'
import { Box } from '@design-system/box'
import { Flex } from '@design-system/flex'
import Link from 'next/link'
import { ThemeToggle } from '@components/ThemeToggle'

import Image from 'next/image'

export function Navbar() {
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
        brc: '$lime9',
      }}>
      {/* LOGO SECTION */}
      <NextLink variant="subtle" href="/" passHref>
        <Link variant="subtle" href="/">
          <Box
            as="a"
            css={{
              ml: '$1',
              color: '$hiContrast',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '$5' },
            }}>
            <Image
              className="logo"
              alt="logo"
              src="/butterfly_logo.svg"
              width={110}
              height={20}
            />
          </Box>
        </Link>
      </NextLink>

      {/* NAVIGATION SECTION */}
      <Flex as="nav" css={{ ai: 'center', px: '0px' }}>
        <ThemeToggle />
        <NextLink href="https://docs.ady.world" passHref>
          <Link variant="subtle" href="https://docs.ady.world">
            <a>Docs</a>
          </Link>
        </NextLink>
        <NextLink href="/design-system" passHref>
          <Link variant="subtle" href="https://docs.ady.world">
            <a>System</a>
          </Link>
        </NextLink>
        <NextLink href="https://github.com/AtelierDesign" passHref>
          <Link href="https://docs.ady.world">
            <a>GitHub</a>
          </Link>
        </NextLink>
        <NextLink variant="subtle" href="/resources" passHref>
          <Link href="https://docs.ady.world">
            <a>Resources</a>
          </Link>
        </NextLink>
      </Flex>
    </Flex>
  )
}
