import { useState, useEffect } from 'react';
import { supabase } from '@lib/client';
import { useRouter } from 'next/router';
import { Box } from '@atelier/box';
import { Heading } from '@atelier/heading';
import { SmallButton } from '@ui/buttons/AtelierButton';
import { Code } from '@atelier/code';
import { FooterMain } from '@ui/app/FooterMain';
import { Navbar } from '@ui/app/Navbar';
import { HoverCardComponent } from '@fnctns/HoverCard';
import Image from 'next/image';

import { styled } from 'stitches.config';

const Container = styled('div', {
  minHeight: '100vh',
  padding: '0 0.5rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: 'auto',
});

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchProfile();
  }, []);

  async function update() {
    const { user, error } = await supabase.auth.update({
      data: {
        city: 'New York',
      },
    });
    console.log('user:', user);
  }

  async function fetchProfile() {
    const profileData = await supabase.auth.user();
    console.log('profileData:', profileData);

    if (!profileData) {
      router.push('/sign-in');
    } else {
      setProfile(profileData);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
    router.push('/sign-in');
  }
  if (!profile) return null;

  return (
    <Box css={{ height: '100vh' }}>
      {/* <!-- NAVBAR --> */}
      <Navbar />
      <Container>
        <HoverCardComponent />
        <Heading size="1" css={{ fontFamily: 'Helvetica', paddingBottom: '20px' }}>
          Hello, {profile.email}
        </Heading>

        <Code size="4" css={{ color: '$blue8' }}>
          User ID: {profile.id}
          <br />
          <br />
          Name: {profile.name}
        </Code>

        <Box css={{ maxWidth: '300px' }}>
          <SmallButton onClick={signOut}>Sign out</SmallButton>
          <SmallButton onClick={update}>Sign in</SmallButton>
        </Box>
      </Container>
      <FooterMain />
    </Box>
  );
};

export default Profile;
