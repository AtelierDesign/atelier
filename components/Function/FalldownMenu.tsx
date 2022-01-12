import React from 'react';
import { Slant as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import Link from 'next/link';

import { styled } from '@stitches/react';

const Menu = styled('div', {
  zIndex: '9999',
  position: 'relative',
  top: '20',
  right: '0',
  width: '200px',
  height: '100vh',
  color: '$gray12',
  backgroundColor: '$gray12',
});

export const FalldownMenu = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Hamburger
      id="hamburger-react"
      className="hamburger-react"
      padding="0"
      direction="left"
      easing="ease-in"
      duration={0.2}
      position="relative"
      color="#000"
      size={18}
      toggled={isOpen}
      toggle={setOpen}
      onToggle={isOpen => {
        if (isOpen) {
          return null;
        } else {
          return null;
        }
      }}
    />
  );
};
