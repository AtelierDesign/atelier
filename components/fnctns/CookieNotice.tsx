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
          textAlign: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          border: '1px solid #231F20',
          //borderTopWidth: '1px',
          //borderBottomWidth: '0',
          //  borderLeftWidth: '0',
          //borderRightWidth: '0',
          borderRadius: '32px',
          background: 'rgba(240, 240, 240, 0.5)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          saturate: '200%',
          color: '#231F20',
          paddingTop: '4px',
          paddingBottom: '4px',
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
          display: 'none',
          backgroundColor: 'transparent',
          color: '#000',
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
          size="2"
          css={{
            fontWeight: '500',
            width: '60vw',
            fontSize: '12px',
            lineHeight: 'normal',
            margin: '0',
            '@sm': {
              width: '100%',
            },
            '&:active': {
              color: '$gray12',
            },
          }}>
          This website uses cookies.{' '}
          <Link href="/privacy" passHref>
            <a>
              <strong>
                <u>Accept</u>
              </strong>
            </a>
          </Link>{' '}
          or find out{' '}
          <Link href="/privacy" passHref>
            <a>
              <strong>
                <u>More</u>
              </strong>
            </a>
          </Link>
          .
        </Text>
      </CookieConsent>
    </div>
  );
};
