import { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import { magic } from '@lib/magic';
import { UserContext } from '@lib/UserContext';
import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Section } from '@design-system/section';
import { EmailForm } from '@components/Magic/EmailForm';
import { SocialLogin } from '@components/Magic/SocialLogin';
import { Copyrights } from '@components/Copyrights';

import { styled } from '@stitches/react';

const CoverBox = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '0',
  overflowY: 'hidden',
});

const LoginFooter = styled('div', {
  width: '100%',
  height: '50px',
  backgroundColor: '$translucent',
  color: '#FFF',
  display: 'block',
  position: 'absolute',
  bottom: '0',
  left: '0',
  right: '0',

  margin: 'auto',
  padding: '4px',
  alignItems: 'center',
  textAlign: 'center',
});

const Login = () => {
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useContext(UserContext);

  // Redirec to / if the user is logged in
  useEffect(() => {
    user?.issuer && Router.push('/');
  }, [user]);

  async function handleLoginWithEmail(email) {
    try {
      setDisabled(true); // disable login button to prevent multiple emails from being triggered

      // Trigger Magic link to be sent to user
      const didToken = await magic.auth.loginWithMagicLink({
        email,
        redirectURI: new URL('/callback', window.location.origin).href, // optional redirect back to your app after magic link is clicked
      });

      // Validate didToken with server
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${didToken}`,
        },
      });

      if (res.status === 200) {
        // Set the UserContext to the now logged in user
        const userMetadata = await magic.user.getMetadata();
        await setUser(userMetadata);
        Router.push('/');
      }
    } catch (error) {
      setDisabled(false); // re-enable login button - user may have requested to edit their email
      console.log(error);
    }
  }

  async function handleLoginWithSocial(provider) {
    await magic.oauth.loginWithRedirect({
      provider, // google, apple, etc
      redirectURI: new URL('/callback', window.location.origin).href, // required redirect to finish social login
    });
  }

  return (
    <CoverBox>
      <Section size="3" css={{ display: 'flex', alignItems: 'center', margin: 'auto' }}>
        <Container size="1" css={{ alignItems: 'center', margin: 'auto', textAlign: 'center' }}>
          <EmailForm disabled={disabled} onEmailSubmit={handleLoginWithEmail}></EmailForm>
          <SocialLogin onSubmit={handleLoginWithSocial} />
        </Container>
      </Section>

      <LoginFooter>
        <Copyrights />
      </LoginFooter>
    </CoverBox>
  );
};

export default Login;
