import { Menu } from '@headlessui/react';
import { Container } from '@atelier/container';
import { Box } from '@atelier/box';
import { FalldownMenu } from '@components/Function/FalldownMenu';

import Link from 'next/link';

import { styled } from '@stitches/react';

const ItemHolder = styled('div', {
  margin: '0',
  padding: '8px',
  position: 'relative',
  alignItems: 'right',
  textAlign: 'right',
});

export const DropdownNavigation = () => {
  return (
    <Container size="2" css={{ alignItems: 'right', textAlign: 'right', zIndex: '9999' }}>
      <Menu>
        <Menu.Button>
          <FalldownMenu />
        </Menu.Button>

        <Menu.Items>
          <Box
            css={{ padding: '16px', display: 'flex', flexDirection: 'column', bc: '$light100', alignItems: 'right' }}>
            <Menu.Item>
              {({ active }) => (
                <ItemHolder>
                  <Link className={`${active && 'menu__item__link'}`} href="/">
                    Account settings
                  </Link>
                </ItemHolder>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <ItemHolder>
                  <Link className={`${active && 'menu__item__link'}`} href="/">
                    Account settings
                  </Link>
                </ItemHolder>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <ItemHolder>
                  <Link className={`${active && 'menu__item__link'}`} href="/">
                    Account settings
                  </Link>
                </ItemHolder>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <ItemHolder>
                  <Link className={`${active && 'menu__item__link'}`} href="/">
                    Account settings
                  </Link>
                </ItemHolder>
              )}
            </Menu.Item>
          </Box>
        </Menu.Items>
      </Menu>
    </Container>
  );
};
