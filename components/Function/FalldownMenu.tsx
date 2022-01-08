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
      size={18}
      toggled={isOpen}
      toggle={setOpen}
      onToggle={isOpen => {
        if (isOpen) {
          return <Menu />;
        } else {
          return null;
        }
      }}
    />
  );
};
