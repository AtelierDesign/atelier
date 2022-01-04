import React from 'react';
import { useState } from 'react';
import { FormLine } from '@components/FormLine';
import { Box } from '@design-system/box';
import { Text } from '@design-system/text';
import { Grid } from '@design-system/grid';

import Image from 'next/image';

// RADIX-UI ICONS
import { TwitterLogoIcon } from '@radix-ui/react-icons';
// import { GitHubLogoIcon } from '@radix-ui/react-icons';

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

const TwitterButton = styled('button', {
  zIndex: '400',
  fontFamily: '$inter',
  fontWeight: '700',
  fontSize: '12px',
  backgroundColor: '$gray3',
  color: '#1DA1F2',
  border: '1px solid $slate6',
  paddingLeft: '40px',
  paddingRight: '40px',
  py: '6px',
  height: '32px',
  borderRadius: '6px',
  lineHeight: '1.3rem',
  width: '100%',
  position: 'relative',

  margin: '3px',

  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '$gray5',
  },
});

export const SocialLogin = ({ onSubmit }) => {
  const providers = ['twitter', 'Github'];
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <CardParent>
        <Text
          size="1"
          css={{ color: '$gray9', fontSize: '10px', fontFamily: '$inter', fontWeight: '700' }}>
          LOGIN WITH SOCIAL
        </Text>
        <FormLine />
        <form>
          <Box
            css={{
              position: 'relative',
              zIndex: '9999',
              alignItems: 'center',
              textAlign: 'center',
            }}>
            {providers.map(provider => {
              return (
                <TwitterButton
                  as="button"
                  type="submit"
                  key={provider}
                  onClick={() => {
                    setIsRedirecting(true);
                    onSubmit(provider);
                  }}
                  style={{ backgroundImage: `url(${provider}.png)` }}>
                  <TwitterLogoIcon />
                  {` `}
                  Sign in with{` `}
                  {provider.replace(/^\w/, c => c.toUpperCase())}
                </TwitterButton>
              );
            })}

            {isRedirecting && <div className="redirecting">Authenticating...</div>}
          </Box>
        </form>
      </CardParent>
    </>
  );
};

{
  /* <!-- GITHUB AND APPLE OPTIONS // NEED TO GET APPLE DEV ACCOUNT --> */
}
{
  /*
<GithubButton>
  <GitHubLogoIcon />
  {` `}
  Sign in with GitHub
</GithubButton>

<SignInWithApple>
  <Image src="/svg/apple.svg" width={15} height={15} alt="Apple Logo" />
  {` `}
  Sign in with Apple
</SignInWithApple>



const GithubButton = styled('button', {
  zIndex: '400',
  fontFamily: '$inter',
  fontWeight: '700',
  fontSize: '12px',
  backgroundColor: '$gray4',
  color: '$gray12',
  paddingLeft: '40px',
  paddingRight: '40px',
  py: '6px',
  height: '36px',
  borderRadius: '8px',
  border: '2px solid transparent',
  lineHeight: '1',
  width: '98%',
  position: 'relative',

  margin: '3px',

  '&:hover': {
    cursor: 'pointer',
  },
});

const SignInWithApple = styled('button', {
  zIndex: '400',
  fontFamily: '$inter',
  fontWeight: '700',
  fontSize: '12px',
  backgroundColor: '$gray4',
  color: '$gray12',
  paddingLeft: '40px',
  paddingRight: '40px',
  py: '6px',
  height: '36px',
  borderRadius: '8px',
  border: '2px solid transparent',
  lineHeight: '1',
  width: '98%',
  position: 'relative',

  margin: '3px',

  '&:hover': {
    cursor: 'pointer',
  },
});



*/
}
