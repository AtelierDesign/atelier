import { useState } from 'react';
import { DefaultButton } from '@components/DefaultButton';
import { TextField } from '@design-system/text-field';
import { Box } from '@design-system/box';
import { Container } from '@design-system/container';

import { styled } from '@stitches/react';

const Contain = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  alignItems: 'center',
  margin: 'auto',
  padding: '1rem',
});

const LoginBox = styled('div', {
  zIndex: '10',
  width: '100vw',
  //minWidth: '100vw',
  height: '100vh',
  backgroundColor: '$gray12',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  opacity: '0.9',
  // backdropFilter: 'invert(10%) blur(10px)',
  saturate: '300%',
  alignItems: 'center',

  overflowY: 'hidden',
  overflowX: 'hidden',
});

const CardParent = styled('div', {
  width: '400px',
  minWidth: '400px',
  height: '400px',
  backgroundColor: '#000',
  display: 'flex',
  position: 'relative',

  borderRadius: '32px',
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
      <LoginBox>
        <Container size="2">
          <Contain>
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
          </Contain>
        </Container>
      </LoginBox>
    </>
  );
};

export default EmailForm;
