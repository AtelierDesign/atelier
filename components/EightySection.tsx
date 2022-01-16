import React from 'react';
import Image from 'next/image';
import { styled } from '@stitches/react';

const Eighty = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: 'auto',
  backgroundColor: '$light100',

  // backgroundImage: 'url("/img/four.png")',
  backgroundPosition: 'center',
  backdropFilter: 'blur(10px)',

  display: 'block',
  position: 'relative',
  margin: '0',
  padding: '0',

  borderBottomWidth: '1px solid #FFF',

  borderBottomLeftRadius: '46px',
  borderBottomRightRadius: '46px',

  overflowY: 'visible',
  overflowX: 'hidden',
});

const ImageHolder = styled('div', {
  zIndex: '1',
  position: 'relative',
  margin: '0',
  padding: '0',
});

export const EightySection = ({ children }) => {
  return (
    <div>
      <Eighty>{children}</Eighty>
      <ImageHolder>
        <Image src="/img/four.png" layout="fill" objectFit="cover" alt="gradient" />
      </ImageHolder>
    </div>
  );
};
