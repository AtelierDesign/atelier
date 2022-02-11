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
          width: '100%',
        },
      }}
      buttonStyle={{
        backgroundColor: 'transparent',
        color: '#FFF',
        fontSize: '13px',
        paddingTop: '6px',
        paddingBottom: '8px',
        paddingLeft: '14px',
        paddingRight: '14px',
        borderRadius: '4px',
        fontFamily: "'Inter', sans-serif'",
        fontWeight: '600',
      }}>
      <Text
        css={{
          // textTransform: 'uppercase',
          fontFamily: '$inter',
          fontSize: '16px',
          fontWeight: 'bold',
          paddingBottom: '7px',
          lineHeight: '1.3',
        }}>
        We use cookies.
      </Text>
      <Text
        size="2"
        css={{
          fontWeight: '500',
          width: '60vw',
          fontSize: '12px',
          lineHeight: '1.3',

          '@sm': {
            width: '100%',
          },
        }}>
        Our websites and online services may use “cookies.” Cookies enable you to use shopping carts and to personalize
        your experience on our sites, tell us which parts of our websites people have visited, help us measure the
        effectiveness of ads and web searches, and give us insights into user behavior so we can improve our
        communications and products.
      </Text>
    </CookieConsent>
  );
};
