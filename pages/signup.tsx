import { useState, useEffect, useContext } from 'react';
import Router from 'next/router';
import { magic } from '@lib/magic';
import { UserContext } from '@lib/UserContext';
import { EmailForm } from '@components/Magic/EmailForm';
import { SocialLogin } from '@components/Magic/SocialLogin';
import { Heading } from '@design-system/heading';
import { Card } from '@components/Card';

import { styled } from '@stitches/react';

const SignupBox = styled('div', {
  zIndex: '10',
  width: '100vw',
  minWidth: '100vw',
  height: '100%',
  backgroundColor: '$gray12',
  display: 'block',
  position: 'relative',
  margin: 'auto',
  opacity: '0.9',
  backdropFilter: 'invert(10%) blur(10px)',
  saturate: '300%',

  overflowY: 'hidden',
  overflowX: 'hidden',
});

const SignUp = () => {
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
        Router.push('/profile');
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
    <SignupBox>
      <Card>
        <Heading size="1" css={{ color: '$white' }}>
          SIGN UP
        </Heading>
        <EmailForm disabled={disabled} onEmailSubmit={handleLoginWithEmail} />
        <SocialLogin onSubmit={handleLoginWithSocial} />
      </Card>
    </SignupBox>
  );
};

export default SignUp;
