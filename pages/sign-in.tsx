import Image from 'next/image';
import { useState } from 'react';
import { TextField } from '@atelier/text-field';
import { Heading } from '@atelier/heading';
import { Container } from '@atelier/container';
import { Box } from '@atelier/box';
import { Button } from '@atelier/button';
import { GradientButton } from '@ui/buttons/AtelierButton';
import { AtelierButton } from '@components/buttons';
import { SmallSpacer } from '@components/SmallSpacer';
import { Card } from '@frameworx/Card';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { TwitterLogoIcon } from '@radix-ui/react-icons';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Navbar } from '@ui/app/Navbar';
import { ToastSuccess } from '@fnctns/ToastSuccess';
import toast, { Toaster } from 'react-hot-toast';

// Supabase..
import { supabase } from '@lib/client';

// Stitches..
import { styled } from 'stitches.config';

const CenterBox = styled('div', {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

// App..
export default function SignIn() {
  // EMAIL
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [session, setSession] = useState(null);

  // Auth handlers..
  async function signIn() {
    const { user, session, error } = await supabase.auth.signIn({
      email,
    });

    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
      toast.success('Successfully submitted', {
        duration: 4000,
        position: 'top-center',
      });
    }
  }

  // Continue with Twitter
  async function signInWithTwitter() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'twitter',
    });

    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
      toast.success('Submitted');
    }
  }

  // Continue with GitHub
  async function signInWithGithub() {
    const { user, session, error } = await supabase.auth.signIn({
      provider: 'github',
    });
  }

  async function signOut() {
    const { error } = await supabase.auth.signOut();
  }

  if (submitted) {
    return (
      <Box css={{ height: '100vh' }}>
        <Navbar />

        <Toaster
          toastOptions={{
            // Docs: https://react-hot-toast.com
            style: {
              fontFamily: 'Inter',
              fontSize: '13px',
              border: '2px solid #affc41',
              borderRadius: '8px',
              padding: '10px',
              color: '#231f20',
              backgroundColor: '#80ed99',
            },
          }}
        />
        <CenterBox>
          <Container size="3">
            <Heading
              size="1"
              css={{
                fontFamily: 'Helvetica',
                fontSize: '13px',
                fontWeight: '700',
                paddingBottom: '20px',
                color: '$gray12',
              }}>
              HEAD TO YOUR INBOX TO SECURELY SIGN IN.
            </Heading>
          </Container>
        </CenterBox>
      </Box>
    );
  }

  return (
    <Box css={{ height: '100vh' }}>
      <Navbar />
      <CenterBox>
        <Heading size="3" css={{ fontFamily: '$inter', paddingBottom: '20px' }}>
          Sign in
        </Heading>

        <Container size="3" css={{ color: '$gray12' }}>
          <TextField size="2" onChange={e => setEmail(e.target.value)} type="email" placeholder="Enter email address" />
          <AtelierButton color="atelier" onClick={() => signIn()}>
            Submit <ChevronRightIcon />
          </AtelierButton>
        </Container>

        <SmallSpacer />

        <Container size="3" css={{ alignItems: 'center', textAlign: 'center' }}>
          <AtelierButton color="twitter" onClick={signInWithTwitter}>
            <TwitterLogoIcon /> Continue with Twitter
          </AtelierButton>
        </Container>

        <Container size="3" css={{ alignItems: 'center', textAlign: 'center', paddingTop: '6px' }}>
          <AtelierButton color="github" onClick={signInWithGithub}>
            <GitHubLogoIcon /> Continue with GitHub
          </AtelierButton>
        </Container>
      </CenterBox>
    </Box>
  );
}
