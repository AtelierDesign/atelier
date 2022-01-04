import { useState } from 'react';
import { TextField } from '@design-system/text-field';
import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Flex } from '@design-system/flex';
import { Heading } from '@design-system/heading';
import { Copyrights } from '@components/Copyrights';

import { styled } from '@stitches/react';

const CardParent = styled('div', {
  width: 'auto',
  height: 'auto',
  backgroundColor: '$white',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  // border: '1px solid $slate3',
  borderRadius: '32px',
  // boxShadow: 'inset 0 0 0 6px $colors$slate5',

  marginTop: '8px',
  marginLeft: '20px',
  marginRight: '20px',
  marginBottom: '8px',
  padding: '8px',
  alignItems: 'center',
  textAlign: 'center',

  boxSizing: 'border-box',
});

const MagicButton = styled('button', {
  zIndex: '400',
  fontFamily: '$inter',
  fontWeight: '700',
  fontSize: '12px',
  backgroundColor: '$lime9',
  color: 'white',
  paddingLeft: '30px',
  paddingRight: '30px',
  py: '6px',
  height: '32px',
  borderRadius: '8px',
  border: '1px solid transparent',
  lineHeight: '1',
  width: '100%',
  position: 'relative',

  '&:hover': {
    backgroundColor: '$sky8',
    cursor: 'pointer',
  },
});

export const EmailForm = ({ onEmailSubmit, disabled }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <>
      <CardParent>
        <Heading size="2" css={{ paddingTop: '18px', paddingBottom: '18px', fontWeight: '800' }}>
          Welcome to Atelier®
        </Heading>
        <form onSubmit={handleSubmit}>
          <TextField
            size="2"
            type="email"
            autoFocus
            onChange={e => setEmail(e.target.value)}
            placeholder="tim@ady.world"
          />
          <MagicButton onClick={handleSubmit}>Login / Sign Up</MagicButton>
        </form>
      </CardParent>
    </>
  );
};
