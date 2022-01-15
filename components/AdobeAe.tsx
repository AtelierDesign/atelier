// REACT + NEXT IMPORTS
import React from 'react';

// ATELIER DESIGN SYSTEM IMPORTS
import { Box } from '@atelier/box';
import { Text } from '@atelier/text';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';
import { Container } from '@atelier/container';
import { DefaultButton } from '@components/DefaultButton';

// RADIX ICONS
import { ArrowRightIcon } from '@radix-ui/react-icons';

// BEGIN APP
export const AdobeAe = () => {
  return (
    <>
      <Box css={{ paddingBottom: '120px' }}>
        <Container
          size="3"
          css={{
            paddingLeft: '20px',
            backgroundColor: 'none',

            '@sm': {
              paddingLeft: '0px',
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
            <strong>Adobe</strong>® After Effects
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
              lineHeight: '1.4',
              px: '5px',
              py: '15px',
              // fontSize: '16px',
              width: '80%',
            }}>
            Create open and close animations that take the dropdown menu’s actual position into account.
          </Paragraph>
          <DefaultButton as="a" css={{}}>
            Learn more <ArrowRightIcon />
          </DefaultButton>
        </Container>
      </Box>
    </>
  );
};
