import { useState } from 'react';
import { DefaultButton } from '@components/DefaultButton';
import { TextField } from '@design-system/text-field';
import { Box } from '@design-system/box';
import { Container } from '@design-system/container';

import { styled } from '@stitches/react';

const CardParent = styled('div', {
  width: '400px',
  minWidth: '400px',
  height: '400px',
  backgroundColor: '#000',
  display: 'flex',
  position: 'relative',
  border: '1px solid $gray11',
  borderRadius: '12px',
  marginTop: '18px',
  padding: '20px',
  alignItems: 'center',
  textAlign: 'center',
});

const EmailForm = ({ onEmailSubmit, disabled }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    onEmailSubmit(email);
  };

  return (
    <>
      <CardParent>
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
      </CardParent>
    </>
  );
};

export default EmailForm;
