// REACT + NEXT IMPORTS
import React from 'react';
import Link from 'next/link';
import NextLink from 'next/link';

// ATELIER DESIGN SYSTEM IMPORTS
import { Box } from '@atelier/box';
import { Text } from '@atelier/text';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';
import { Container } from '@atelier/container';
import { AtelierButton } from '@ui/buttons/AtelierButton';
import { CaretRightIcon } from '@radix-ui/react-icons';

// RADIX ICONS
import { ArrowRightIcon } from '@radix-ui/react-icons';

// BEGIN APP
export const AdobeAe = () => {
  return (
    <>
      <Box css={{ paddingLeft: '0', paddingRight: '0', paddingBottom: '120px' }}>
        <Container
          size="3"
          css={{
            paddingLeft: '10px',
            paddingRight: '10px',
            margin: '0',
            backgroundColor: 'none',

            '@sm': {
              paddingLeft: '0px',
              paddingRight: '0px',
            },
          }}>
          <Text
            css={{
              fontSize: '14px',
              color: '$gray11',
              fontWeight: '500',
              lineHeight: '2',
              paddingLeft: '6px',
            }}>
            Adobe® After Effects
          </Text>

          <Heading size="3" css={{ fontWeight: '700', paddingLeft: '5px', color: '$gray12' }}>
            Your pack, your style.
          </Heading>
          <Paragraph
            size="1"
            css={{
              fontFamily: '$inter',
              fontWeight: '500',
              color: '$gray10',
              lineHeight: '1.3',
              px: '5px',
              py: '15px',
              fontSize: '16px',
              width: '80%',
              paddingBottom: '30px',

              '@sm': {
                fontSize: '14px',
                width: '100%',
              },
            }}>
            Create open and close animations that take the dropdown menu’s actual position into account.
          </Paragraph>

          <Link href="/welcome" passHref>
            <a>
              <AtelierButton color="blue">
                Learn More
                <Box css={{ display: 'inline', ml: '$1' }}>
                  <CaretRightIcon />
                </Box>
              </AtelierButton>
            </a>
          </Link>
        </Container>
      </Box>
    </>
  );
};
