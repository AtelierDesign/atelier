// REACT IMPORTS
import React from 'react';

// DEPENDENCIES
import CookieConsent from 'react-cookie-consent';

// ATELIER® DESIGN SYSTEM
import { Text } from '@atelier/text';

// Cookie Banner Component
export const CookieNotice = () => {
  return (
    <CookieConsent
      debug={false}
      expires={150}
      location="bottom"
      buttonText="Accept"
      cookieName="AtelierCookie001"
      style={{
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid #231F20',
        borderTopWidth: '1px',
        borderBottomWidth: '0',
        borderLeftWidth: '0',
        borderRightWidth: '0',
        background: 'rgba(240, 240, 240, 0.5)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        saturate: '200%',
        color: '#231F20',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '6px',
        paddingRight: '6px',

        '@500px': {
          flexDirection: 'column',
        },
      }}
      buttonStyle={{
        backgroundColor: 'hsl(81, 67%, 50%)',
        color: '#FFFFFF',
        fontSize: '13px',
        paddingTop: '6px',
        paddingBottom: '8px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderRadius: '6px',
        fontFamily: "'Inter', sans-serif'",
        fontWeight: '600',
      }}>
      <Text
        css={{
          // textTransform: 'uppercase',
          fontFamily: '$inter',
          fontSize: '14px',
          fontWeight: 'bold',
          paddingBottom: '7px',
          lineHeight: '1.3',
        }}>
        We use cookies.
      </Text>
      <Text size="2" css={{ fontWeight: '500', width: '60vw', fontSize: '11px', lineHeight: '1.3' }}>
        We use cookies to personalise content and ads, to provide social media features and to analyse our traffic. We
        also share information about your use of our site with our social media, advertising and analytics partners who
        may combine it with other information that you’ve provided to them or that they’ve collected from your use of
        their services.
      </Text>
    </CookieConsent>
  );
};
