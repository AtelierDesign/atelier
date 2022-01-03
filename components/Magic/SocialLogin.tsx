import React from 'react';
import { useState } from 'react';
import { DefaultButton } from '@components/DefaultButton';
import { Box } from '@design-system/box';
import { Text } from '@design-system/text';

export const SocialLogin = ({ onSubmit }) => {
  const providers = ['twitter'];
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <Box
        css={{ position: 'relative', zIndex: '9999', alignItems: 'center', textAlign: 'center' }}>
        <Text css={{ fontFamily: '$jetbrain', fontSize: '13px', lineHeight: '1', padding: '10px' }}>
          Or login with
        </Text>
        {providers.map(provider => {
          return (
            <div key={provider}>
              <button
                className="social-btn"
                type="submit"
                onClick={() => {
                  setIsRedirecting(true);
                  onSubmit(provider);
                }}
                key={provider}
                style={{ backgroundImage: `url(${provider}.png)` }}>
                {/* turns "google" to "Google" */}
                {provider.replace(/^\w/, c => c.toUpperCase())}
              </button>
            </div>
          );
        })}
        {isRedirecting && <div className="redirecting">Redirecting...</div>}
      </Box>
    </>
  );
};
