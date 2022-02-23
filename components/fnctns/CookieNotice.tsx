// REACT IMPORTS
import React from 'react';
import Link from 'next/link';

// DEPENDENCIES
import CookieConsent from 'react-cookie-consent';
import { Container } from '@atelier/container';

// ATELIER® DESIGN SYSTEM
import { Text } from '@atelier/text';

// Cookie Banner Component
export const CookieNotice = () => {
  return (
    <div className="cookie_bar">
      <CookieConsent
        debug={true}
        expires={150}
        location="bottom"
        buttonText="Accept"
        cookieName="AtelierCookie001"
        style={{
          height: '40px',
          zIndex: '9999',
          right: '0',
          textAlign: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          border: '1px solid #231F20',
          // borderTopWidth: '1px',
          // borderBottomWidth: '0',
          // borderLeftWidth: '0',
          // borderRightWidth: '0',
          borderRadius: '32px',
          background: 'rgba(240, 240, 240, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          saturate: '200%',
          color: '#231F20',
          paddingTop: '0px',
          paddingBottom: '0px',
          paddingLeft: '6px',
          paddingRight: '6px',
          width: 'auto',
          margin: '10px',

          '@md': {
            flexDirection: 'column',
            width: '100%',
            paddingLeft: '10px',
            paddingRight: '10px',
          },
        }}
        buttonStyle={{
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'row',
          backgroundColor: '#83c5be',
          color: '#fff',
          fontSize: '13px',
          paddingTop: '3px',
          paddingBottom: '3px',
          paddingLeft: '24px',
          paddingRight: '24px',
          borderRadius: '32px',
          fontFamily: "'Inter', sans-serif'",
          fontWeight: '600',
          margin: 'auto',
          height: '32px',
          lineHeight: 'normal',
        }}>
        <Text
          size="2"
          css={{
            fontWeight: '500',
            fontSize: '13px',
            lineHeight: 'normal',
            margin: '0',
            padding: '0',
            width: '100%',
            '@sm': {
              width: '100%',
            },
            '&:active': {
              color: '$gray12',
            },
          }}>
          This website uses cookies. See{' '}
          <Link href="/privacy" passHref>
            <a>
              <strong>
                <u>Privacy Policy</u>
              </strong>
            </a>
          </Link>
        </Text>
      </CookieConsent>
    </div>
  );
};
