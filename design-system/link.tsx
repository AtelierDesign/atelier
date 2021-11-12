import { styled } from 'stitches.config';
import { Text } from './text';

export const Link = styled('a', {
  alignItems: 'center',
  gap: '$1',
  flexShrink: 0,
  outline: 'none',
  textDecorationLine: 'none',
  textUnderlineOffset: '3px',
  textDecorationColor: '$slate4',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  lineHeight: 'inherit',
  '@hover': {
    '&:hover': {
      textDecorationLine: 'underline'
    }
  },
  '&:focus': {
    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineOffset: '2px',
    textDecorationLine: 'none'
  },
  [`& ${Text}`]: {
    color: 'lime9'
  },
  variants: {
    variant: {
      subtle: {
        color: '$slate9',
        textDecorationColor: '$slate9',
        '&:focus': {
          outlineColor: '$slate8'
        }
      },
      contrast: {
        color: '$hiContrast',
        textDecoration: 'underline',
        textDecorationColor: '$slate4',
        '@hover': {
          '&:hover': {
            textDecorationColor: '$slate7'
          }
        },
        '&:focus': {
          outlineColor: '$slate8'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'lime'
  }
});
