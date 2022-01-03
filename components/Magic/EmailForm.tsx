import { useState } from 'react';
import { DefaultButton } from '@components/DefaultButton';
import { TextField } from '@design-system/text-field';
import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Flex } from '@design-system/flex';
import { Heading } from '@design-system/heading';
import { Copyrights } from '@components/Copyrights';

import { styled } from '@stitches/react';

const CardParent = styled('div', {
  width: '400px',
  height: 'auto',
  backgroundColor: '$light100',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  border: '1px solid $gray11',
  borderRadius: '12px',
  marginTop: '28px',
  marginLeft: '28px',
  marginRight: '28px',
  marginBottom: '28px',
  padding: '20px',
  alignItems: 'center',
  textAlign: 'center',
});

export const EmailForm = ({ onEmailSubmit, disabled }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <>
      <Flex css={{ ai: 'center' }}>
        <CardParent>
          <Heading size="2" css={{ paddingTop: '18px' }}>
            Sign Up
          </Heading>
          <form onSubmit={handleSubmit}>
            <TextField
              size="2"
              type="email"
              autoFocus
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
            />
            <DefaultButton as="a" onClick={handleSubmit}>
              Send Magic Link
            </DefaultButton>
          </form>

          <Copyrights />
        </CardParent>
      </Flex>
    </>
  );
};
