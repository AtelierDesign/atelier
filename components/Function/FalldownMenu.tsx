import { Menu } from '@headlessui/react';
import { Link } from '@atelier/link';
import { Button } from '@atelier/button';
import { LimeButton } from '@components/Buttons/LimeButton';
import NextLink from 'next/link';

export const FalldownMenu = () => {
  return (
    <Menu>
      <LimeButton>
        <Menu.Button>More</Menu.Button>
      </LimeButton>

      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <Button>
              <NextLink href="/shop" passHref>
                <Link variant="subtle" css={{ marginRight: '$3', color: '$gray12', '@sm': { marginRight: '$2' } }}>
                  Shop
                </Link>
              </NextLink>
            </Button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <NextLink href="/" passHref>
              <Link variant="subtle" css={{ marginRight: '$3', color: '$gray12', '@sm': { marginRight: '$2' } }}>
                Link 2
              </Link>
            </NextLink>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Link 3 disabled</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};
