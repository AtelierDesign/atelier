import React from 'react';
import CookieConsent from 'react-cookie-consent';
import { Text } from '@atelier/text';

import { useTheme } from 'next-themes';

export const CookieNotice = () => {
  const { theme, setTheme } = useTheme();

  return (
    <CookieConsent
      debug={true}
      expires={150}
      location="bottom"
      buttonText="Accept"
      cookieName="AtelierCookie001"
      style={{
        border: '1px solid #231F20',
        borderTopWidth: '1px',
        borderBottomWidth: 'none',
        borderLeftWidth: 'none',
        borderRightWidth: 'none',
        background: 'rgba(240, 240, 240, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        saturate: '200%',
        color: '#231F20',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '6px',
        paddingRight: '6px',
      }}
      buttonStyle={{
        backgroundColor: 'hsl(81, 67%, 50%)',
        color: '#FFFFFF',
        fontSize: '13px',
        paddingTop: '6px',
        paddingBottom: '6px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '6px',
        fontFamily: "'Inter', sans-serif'",
        fontWeight: '600',
      }}>
      <Text size="2" css={{ fontWeight: '500' }}>
        A Cookies Policy is used to inform your site's visitors that you're using cookies on your website, web app, or
        mobile app.
      </Text>
    </CookieConsent>
  );
};
