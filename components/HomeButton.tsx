import { styled } from 'stitches.config';

export const HomeButton = styled('button', {
  appearance: 'none',
  border: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  backgroundColor: 'transparent',

  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: 500,
  borderRadius: '7px',
  lineHeight: 1,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  height: '34px',
  px: '$3',
  transition: 'background-color 75ms ease',

  variants: {
    color: {
      gray: {
        color: '$slate11',
        '&:hover': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$slate8, inset 0 0 0 1px $colors$slate8',
        },
      },

      blue: {
        backgroundColor: '$blue4',
        color: '$blue11',
        '&:hover': {
          backgroundColor: '$blue5',
        },
        '&:active': {
          backgroundColor: '$blue6',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$blue8, inset 0 0 0 1px $colors$blue8',
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
  },
});
