import { useState } from 'react';
import { TextField } from '@design-system/text-field';
import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Flex } from '@design-system/flex';
import { Heading } from '@design-system/heading';
import { Copyrights } from '@components/Copyrights';

import { styled } from '@stitches/react';

const Card = styled('div', {
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
  borderRadius: '6px',
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
      <Card>
        <Heading size="3" css={{ paddingTop: '18px', paddingBottom: '18px', fontWeight: '800' }}>
          Welcome.
        </Heading>
        <form onSubmit={handleSubmit}>
          <TextField
            size="2"
            type="email"
            // autoFocus
            onChange={e => setEmail(e.target.value)}
            placeholder="you@ady.world"
          />
          <MagicButton onClick={handleSubmit}>Login or Sign Up</MagicButton>
        </form>
      </Card>
    </>
  );
};
