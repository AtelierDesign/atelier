import React from 'react';
import Router from 'next/router';
import NextLink from 'next/link';

// ATELIER® DESIGN SYSTEM
import { Box } from '@atelier/box';
import { Flex } from '@atelier/flex';
import { Text } from '@atelier/text';
import { Link } from '@atelier/link';
import { TimeCode } from '@components/Time/TimeCode';
import { ThemeSwitch } from '@components/ThemeSwitch';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export const CoverNavbar = () => {
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
          backgroundColor: '$translucent',
          width: '100vw',

          zIndex: '9999',
        }}>
        {/* <!-- LOGO SECTION --> */}
        <NextLink href="/" passHref>
          <Box
            as="a"
            css={{
              fontFamily: '$inter',
              fontSize: '13px',
              fontWeight: '500',
              color: '$gra12',
              ml: '$2',
              display: 'inline-flex',
              textDecoration: 'none',
              '&:focus': {
                boxShadow: 'none',
              },
              '@bp2': { ml: '$5' },
            }}>
            <TimeCode />
            {/*<Image className="logo" alt="logo" src="/butterfly_logo.svg" width={80} height={18} />*/}
          </Box>
        </NextLink>

        {/* NAVIGATION SECTION */}

        {/* <!-- JSX ELEMENT --> */}

        <Flex as="nav" css={{ ai: 'center', px: '0px', fontFamily: '$inter', fontSize: '12px' }}>
          {/* <!-- THEME SWITCH --> */}
          <ThemeSwitch />
        </Flex>
      </Flex>
    </>
  );
};
