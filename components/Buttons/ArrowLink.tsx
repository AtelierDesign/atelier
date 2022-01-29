import React from 'react';
import Link from 'next/link';
import { CaretRightIcon } from '@radix-ui/react-icons';
import { styled } from 'stitches.config';

// This creates a custom component that wraps an <a> tag
const DefaultLink = styled('a', {
  fontFamily: '$inter',
  fontSize: '12px',
  fontWeight: '600',

  color: '$gray12',
  textDecoration: 'none',
  position: 'relative',
  zIndex: '50',
});

export const ArrowLink = ({ href, children }) => {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <DefaultLink>
        {children}
        {` `}
        <CaretRightIcon />
      </DefaultLink>
    </Link>
  );
};
