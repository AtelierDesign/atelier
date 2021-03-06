// REACT IMPORTS
import React from 'react';
import { useState, useEffect } from 'react';
import { supabase } from '@lib/client';
import { useRouter } from 'next/router';

// STITCHES & RADIX-UI IMPORTS
import * as HoverCardPrimitive from '@radix-ui/react-hover-card';
import { keyframes } from '@stitches/react';
import { mauve } from '@radix-ui/colors';

import Avatar from 'boring-avatars';

// ATELIER® DESIGN SYSTEM
import { styled } from 'stitches.config';
import { Text } from '@atelier/text';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(HoverCardPrimitive.Content, {
  borderRadius: 6,
  padding: 20,
  width: 300,
  lineHeight: '1.2',
  backgroundColor: '$slate3',
  color: '$gray12',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

const StyledArrow = styled(HoverCardPrimitive.Arrow, {
  fill: '$slate3',
});

// Exports
export const HoverCard = HoverCardPrimitive.Root;
export const HoverCardTrigger = HoverCardPrimitive.Trigger;
export const HoverCardContent = StyledContent;
export const HoverCardArrow = StyledArrow;

const Flex = styled('div', { display: 'flex' });

const ImageTrigger = styled('a', {
  all: 'unset',
  cursor: 'pointer',
  borderRadius: '100%',
  display: 'inline-block',
  '&:focus': { boxShadow: `0 0 0 2px white` },
});

const Img = styled('img', {
  display: 'block',
  borderRadius: '100%',
  variants: {
    size: {
      normal: { width: 45, height: 45 },
      large: { width: 60, height: 60 },
    },
  },
  defaultVariants: {
    size: 'normal',
  },
});

// HoverCard Component...
export const HoverCardComponent = () => {
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
    <>
      <HoverCard>
        <HoverCardTrigger asChild>
          <ImageTrigger href="/welcome">
            <Avatar size={40} name="ADY®" variant="marble" colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']} />
          </ImageTrigger>
        </HoverCardTrigger>
        <HoverCardContent sideOffset={5}>
          <Flex css={{ flexDirection: 'column', gap: 7 }}>
            <Avatar size={50} name="ADY®" variant="marble" colors={['#92A1C6', '#146A7C', '#F0AB3D', '#C271B4', '#C20D90']} />

            <Flex css={{ flexDirection: 'column', gap: 15 }}>
              <Text css={{ color: '$gray12', fontFamily: '$inter' }}>
                <Text css={{ color: '$gray12', fontFamily: '$inter' }}>{profile.name}</Text>
                <Text css={{ color: '$gray12', fontFamily: '$inter' }}>{profile.email}</Text>
              </Text>
              <Text css={{ color: '$gray12', fontFamily: '$inter' }}>
                Components, icons, colors, and templates for building high-quality, accessible UI. Free and open-source.
              </Text>
              <Flex css={{ gap: 15 }}>
                <Flex css={{ gap: 5 }}>
                  <Text css={{ color: '$gray12', fontFamily: '$inter' }}>0</Text> <Text css={{ fontFamily: '$inter' }}>Following</Text>
                </Flex>
                <Flex css={{ gap: 5 }}>
                  <Text css={{ color: '$gray12', fontFamily: '$inter' }}>2,900</Text> <Text css={{ fontFamily: '$inter' }}>Followers</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <HoverCardArrow />
        </HoverCardContent>
      </HoverCard>
    </>
  );
};
