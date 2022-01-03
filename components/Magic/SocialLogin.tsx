import React from 'react';
import { useState } from 'react';
import { DefaultButton } from '@components/DefaultButton';
import { Box } from '@design-system/box';

const SocialLogin = ({ onSubmit }) => {
  const providers = ['twitter'];
  const [isRedirecting, setIsRedirecting] = useState(false);

  return (
    <>
      <Box css={{ alignItems: 'center', textAlign: 'center' }}>
        <div>Or login with</div>
        {providers.map(provider => {
          return (
            <div key={provider}>
              <DefaultButton
                type="submit"
                onClick={() => {
                  setIsRedirecting(true);
                  onSubmit(provider);
                }}
                key={provider}
                style={{ backgroundImage: `url(${provider}.png)` }}>
                {/* turns "google" to "Google" */}
                {provider.replace(/^\w/, c => c.toUpperCase())}
              </DefaultButton>
            </div>
          );
        })}
        {isRedirecting && <div className="redirecting">Redirecting...</div>}
      </Box>
    </>
  );
};

export default SocialLogin;
