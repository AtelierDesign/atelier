import { css } from '@stitches/react';
import { styled } from 'stitches.config';

export const DEFAULT_TAG = 'button';

export const styledButton = css({
  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',

  // BASE STYLES
  position: 'relative',
  paddingLeft: '18px',
  paddingRight: '18px',
  paddingTop: '4px',
  paddingBottom: '4px',
  height: '32px',
  borderRadius: '7px',
  border: 'none',
  borderColor: '$gray12',
  lineHeight: 'normal',
  width: 'auto',

  // MARGINS
  marginRight: '6px',
  marginLeft: '1px',
  marginTop: '0px',
  marginBottom: '0px',

  // BUTTON TEXT
  fontSize: '13px',
  fontWeight: '600',
  fontFamily: '$inter',
  color: '$white',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },

  variants: {
    color: {
      lime: {
        backgroundColor: '$lime9',
        color: '$white',

        '&:hover': {
          backgroundColor: '$lime10',
          color: '$white',
        },
      },
      orange: {
        backgroundColor: '$orange9',
        color: '$white',
      },
      ghost: {
        backgroundColor: '$translucent',
        color: '$gray11',
        fontWeight: '600',

        '&:hover': {
          backgroundColor: '$slate5',
          color: '$gray11',
        },
      },
    },
  },
});

export const styledSmallButton = css({
  // RESET
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',

  // BASE STYLES
  position: 'relative',
  paddingLeft: '14px',
  paddingRight: '14px',
  paddingTop: '4px',
  paddingBottom: '4px',
  height: '26px',
  borderRadius: '4px',
  border: 'none',
  borderColor: '$gray12',
  lineHeight: 'normal',
  width: 'auto',

  // MARGINS
  marginRight: '6px',
  marginLeft: '6px',
  marginTop: '6px',
  marginBottom: '6px',

  // BUTTON TEXT
  fontSize: '11px',
  fontWeight: '600',
  fontFamily: '$inter',
  color: '$white',

  '&:hover': {
    color: '$white',
    cursor: 'pointer',
  },

  variants: {
    color: {
      lime: {
        backgroundColor: '$lime9',
        color: '$white',
      },
      orange: {
        backgroundColor: '$gray9',
        color: '$white',
      },
      gray: {
        backgroundColor: '$gray4',
        color: '$white',
      },
    },
  },
});

export const Button = styled(DEFAULT_TAG, styledButton);
export const SmallButton = styled(DEFAULT_TAG, styledSmallButton);
