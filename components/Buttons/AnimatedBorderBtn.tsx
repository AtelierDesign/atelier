import React from 'react';
import { styled } from '@stitches/react';

const Button = styled('button', {
  background: 'none',
  padding: '10px',
  webkitClipPath: 'square(50% at 50% 50%)',
  clipPath: 'square(50% at 50% 50%)',
  width: '120px',
  height: '120px',
  fontFamily: '$inter',
  fontWeight: '700',
  textTransform: 'uppercase',
  fontSize: '14px',

  '&:hover': {
    transform: 'scale3d(1, 1, 1)',
  },
});

export const AnimatedBorderBtn = () => {
  return (
    <Button className="button--fenrir">
      <svg aria-hidden="true" className="progress" width="70" height="20" viewbox="0 0 70 70">
        <path
          className="progress__circle"
          d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
        />
        <path
          className="progress__path"
          d="m35,2.5c17.955803,0 32.5,14.544199 32.5,32.5c0,17.955803 -14.544197,32.5 -32.5,32.5c-17.955803,0 -32.5,-14.544197 -32.5,-32.5c0,-17.955801 14.544197,-32.5 32.5,-32.5z"
          pathLength="1"
        />
      </svg>

      <span>Animated Button</span>
    </Button>
  );
};
