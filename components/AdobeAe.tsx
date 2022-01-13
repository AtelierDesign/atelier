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
        <Container size="3" css={{ paddingLeft: '30px', bc: 'none' }}>
          <Text
            css={{
              fontSize: '13px',
              color: '$gray11',
              fontWeight: '500',
              lineHeight: '2',
              paddingLeft: '6px',
            }}>
            <strong>Adobe</strong>® After Effects
          </Text>
          <Heading size="3" css={{ fontWeight: '600', paddingLeft: '5px', color: '$gray12' }}>
            Style made easy.
          </Heading>
          <Paragraph
            size="2"
            css={{
              fontFamily: '$inter',
              fontWeight: '500',
              color: '$gray10',
              lineHeight: '1.4',
              px: '5px',
              py: '15px',
              fontSize: '16px',
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
