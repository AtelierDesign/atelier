import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Section } from '@design-system/section';
import { Heading } from '@design-system/heading';
import { Text } from '@design-system/text';
import { NavbarSticky } from '@components/NavbarSticky';
import { FooterMain } from '@components/FooterMain';
import { DefaultButton } from '@components/DefaultButton';
import { Hero } from '@components/Hero';
import { Spacer } from '@components/Spacer';
import { Line } from '@components/Line';
import { OneCol } from '@components/OneCol';
import { SocialSection } from '@components/SocialSection';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { CursorArrowIcon } from '@radix-ui/react-icons';

import React from 'react';

import { styled } from '@stitches/react';

const GridX = styled('div', {
  flow: 'column',
  overflowX: 'scroll',
  overflowY: 'hidden',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px'
});

const Scroller = styled('div', {
  width: '100%',
  height: 'auto',
  backgroundColor: '$slate1',
  display: 'inline-flex',

  overflowX: 'scroll',
  overflowY: 'hidden',

  padding: '18px'
});

const Card = styled('div', {
  width: '5000px',
  minWidth: '500px',
  height: '350px',
  backgroundColor: '$slate3',
  display: 'block',
  position: 'relative',
  border: '1px solid',
  borderColor: '$slate5',

  borderRadius: '32px',
  marginTop: '18px',
  padding: '30px',
  alignItems: 'center',
  webkitScrollbar: 'none'
});

const Atelier = () => {
  return (
    <div>
      <Box>
        <NavbarSticky />
        <Hero />

        <OneCol />
      </Box>
      <Spacer />
      <Box css={{ padding: '0px', bc: '$slate1' }}>
        <Container size="3" css={{ bc: 'none' }}>
          <Text css={{ color: '$slate9', fontWeight: '500', lineHeight: '2', paddingLeft: '6px' }}>Adobe® After Effects</Text>
          <Heading size="3" css={{ fontWeight: '600', paddingLeft: '5px' }}>
            Style made easy.
          </Heading>
          <Text css={{ color: '$slate9', lineHeight: '1.4', px: '5px', py: '20px', fontSize: '16px', width: '80%' }}>
            Create open and close animations that take the dropdown menu’s actual position into account.
          </Text>
          <DefaultButton as="a" css={{}}>
            Learn more <ArrowRightIcon />
          </DefaultButton>
        </Container>
      </Box>

      <Box css={{ padding: '0px', bc: 'none' }}>
        <Scroller className="scroll-container">
          <GridX className="scroll-grid">
            {/* INSERT CARD COMPONENT WITH CHILDREN */}
            {/* <Card> .. children .. </Card> */}
            <Card>
              <Heading size="1" css={{ fontWeight: '600' }}>
                Feature One
              </Heading>
            </Card>
            <Card>
              <Heading size="1" css={{ fontWeight: '600' }}>
                Feature One
              </Heading>
            </Card>
            <Card>
              <Heading size="1" css={{ fontWeight: '600' }}>
                Feature One
              </Heading>
            </Card>
            <Card>
              <Heading size="1" css={{ fontWeight: '600' }}>
                Feature One
              </Heading>
            </Card>
            <Card>
              <Heading size="1" css={{ fontWeight: '600' }}>
                Feature One
              </Heading>
            </Card>
          </GridX>
        </Scroller>
      </Box>

      <Line />

      <Box css={{ bc: '$slate1', margin: '0', px: '0' }}>
        <Section size="3">
          <Heading size="3" css={{ textAlign: 'center', fontWeight: '600' }}>
            Atelier® <strong>Community.</strong>
          </Heading>
          <Text css={{ textAlign: 'center', lineHeight: '3' }}>
            Get involved. Get inspired.{` `}
            <CursorArrowIcon />
          </Text>
          <Container size="3" css={{ jc: 'center', ai: 'center', margin: 'auto' }}>
            <SocialSection />
          </Container>
        </Section>
      </Box>
      <FooterMain />
    </div>
  );
};

export default Atelier;
