import React from 'react';

import { styled, keyframes } from '@stitches/react';
import { ChevronRightIcon } from '@radix-ui/react-icons';

import { Text } from '@design-system/text';
import { darkTheme } from 'stitches.config';
import { Button } from '@design-system/button';
import { useTheme } from 'next-themes';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(DropdownMenuPrimitive.Content, {
  minWidth: 220,
  // width: '',
  height: 'auto',
  marginTop: '8px',
  backgroundColor: '$light100',

  borderTopRightRadius: '0px',
  borderTopLeftRadius: '0px',
  borderBottomRightRadius: '8px',
  borderBottomLeftRadius: '8px',

  padding: '5px',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const itemStyles = {
  all: 'unset',
  fontFamily: '$inter',
  fontSize: 13,
  lineHeight: 1,
  color: '$orange9',
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  height: 25,
  // padding: '0 5px',
  position: 'relative',
  paddingLeft: '10px',
  paddingRight: '10px',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$mauve8',
    pointerEvents: 'none',
  },

  '&:hover': {
    cursor: 'pointer',
  },

  '&:focus': {
    backgroundColor: '$violet9',
    color: '$slate2',
  },
};

const StyledItem = styled(DropdownMenuPrimitive.Item, { ...itemStyles });
const StyledCheckboxItem = styled(DropdownMenuPrimitive.CheckboxItem, { ...itemStyles });
const StyledRadioItem = styled(DropdownMenuPrimitive.RadioItem, { ...itemStyles });
const StyledTriggerItem = styled(DropdownMenuPrimitive.TriggerItem, {
  '&[data-state="open"]': {
    backgroundColor: '$violet4',
    color: '$violet11',
  },
  ...itemStyles,
});

const StyledLabel = styled(DropdownMenuPrimitive.Label, {
  paddingLeft: 25,
  fontSize: 12,
  lineHeight: '25px',
  color: '$mauve11',
});

const StyledSeparator = styled(DropdownMenuPrimitive.Separator, {
  height: 1,
  backgroundColor: '$orange6',
  margin: 5,
});

const StyledItemIndicator = styled(DropdownMenuPrimitive.ItemIndicator, {
  position: 'absolute',
  left: 0,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// EXPORTS
export const DropdownMenu = DropdownMenuPrimitive.Root;
export const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
export const DropdownMenuContent = StyledContent;
export const DropdownMenuItem = StyledItem;
export const DropdownMenuCheckboxItem = StyledCheckboxItem;
export const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;
export const DropdownMenuRadioItem = StyledRadioItem;
export const DropdownMenuItemIndicator = StyledItemIndicator;
export const DropdownMenuTriggerItem = StyledTriggerItem;
export const DropdownMenuLabel = StyledLabel;
export const DropdownMenuSeparator = StyledSeparator;

// APP
const Box = styled('div', {});

const RightSlot = styled('div', {
  marginLeft: 'auto',
  paddingLeft: '20px',
  color: '$mauve11',
  ':focus > &': { color: 'white' },
  '[data-disabled] &': { color: '$mauve8' },
});

const IconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '4px',
  border: 'none',
  height: '22px',
  width: '55px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  // color: '$orange9',
  backgroundColor: '$white',
  color: '$gray12',
  boxShadow: `0 2px 4px $orange9`,
  '&:hover': { backgroundColor: '$orange5' },
  '&:focus': { boxShadow: `0 0 0 1px black` },
});

export const MenuNav = props => {
  const { theme, setTheme } = useTheme();
  // const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  // const [urlsChecked, setUrlsChecked] = React.useState(false);
  // const [person, setPerson] = React.useState('pedro');

  return (
    <Box>
      <DropdownMenu>
        {/* INSTALL TRIGGER (MENU) */}
        <DropdownMenuTrigger asChild>
          <IconButton aria-label="Customise options">
            <Text
              css={{
                fontFamily: '$jetbrain',
                fontSize: '12px',
                fontWeight: '700',
                color: '$gray12',
              }}>
              Menu
            </Text>
          </IconButton>
        </DropdownMenuTrigger>

        {/* ITEM 1 (SHOP ALL) */}
        <DropdownMenuContent sideOffset={5}>
          <DropdownMenuItem>
            <Button
              variant="ghost"
              css={{
                color: '$orange9',
                '&:hover': {
                  cursor: 'pointer',
                  color: '$white',
                },
              }}>
              Shop All
            </Button>
            <RightSlot>⌘ S</RightSlot>
          </DropdownMenuItem>

          {/* ITEM 2 (ABOUT) */}
          <DropdownMenuItem>
            <Button
              variant="ghost"
              css={{
                color: '$orange9',
                '&:hover': {
                  cursor: 'pointer',
                  color: '$white',
                },
              }}>
              About
            </Button>
            <RightSlot>⌘ A</RightSlot>
          </DropdownMenuItem>

          {/* SEPERATOR */}
          <DropdownMenuSeparator />

          {/* RIGHT SLOT BEGIN */}
          <DropdownMenu>
            <DropdownMenuTriggerItem>
              <Button
                variant="ghost"
                css={{
                  color: '$orange9',
                  '&:hover': {
                    cursor: 'pointer',
                    color: '$white',
                  },
                }}>
                More Tools
              </Button>
              <RightSlot>
                <ChevronRightIcon />
              </RightSlot>
            </DropdownMenuTriggerItem>
            <DropdownMenuContent sideOffset={8} alignOffset={-5} css={{ borderRadius: '8px' }}>
              <DropdownMenuItem>
                Save Page As… <RightSlot>⌘+S</RightSlot>
              </DropdownMenuItem>
              <DropdownMenuItem>Create Shortcut…</DropdownMenuItem>
              <DropdownMenuItem>Name Window…</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Developer Tools</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* SEPERATOR */}
          <DropdownMenuSeparator />

          {/* THEME TOGGLE */}
          <DropdownMenuItem>
            <Button
              variant="ghost"
              css={{
                color: '$orange9',
                '&:hover': {
                  cursor: 'pointer',
                  color: '$white',
                },
              }}
              onClick={() => {
                const newTheme = theme === 'dark' ? 'theme' : 'dark';

                document
                  .querySelectorAll('[data-demo-iframe]')
                  .forEach((iframe: HTMLIFrameElement) => {
                    if (iframe.contentDocument?.documentElement) {
                      iframe.contentDocument.documentElement.classList.toggle(darkTheme.className);
                      iframe.contentDocument.documentElement.classList.toggle('theme');
                      iframe.contentDocument.documentElement.style.setProperty(
                        'color-scheme',
                        newTheme,
                      );
                    }
                  });

                document.documentElement.classList.toggle(darkTheme.className);
                document.documentElement.classList.toggle('theme');
                document.documentElement.style.setProperty('color-scheme', newTheme);

                // HERE, WE STILL NEED TO LET 'next-themes' KNOW
                // OF THE THEME CHANGE SO IT CAN SAVE TO LOCAL STORAGE.
                setTheme(newTheme);
              }}
              // ALLOW PROPS
              {...props}
              aria-label="TOGGLE LIGHT AND DARK THEME®">
              Toggle Theme
            </Button>
            <RightSlot>⌘ T</RightSlot>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default MenuNav;
