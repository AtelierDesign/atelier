import { Grid } from '@design-system/grid';
import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Section } from '@design-system/section';
import { Heading } from '@design-system/heading';
import { Text } from '@design-system/text';
import NextLink from 'next/link';
import Link from 'next/link';

import { styled } from '@stitches/react';

const Card = styled('div', {
  bc: '$slate4',
  display: 'block',
  position: 'relative',
  margin: 'auto',

  borderRadius: '0px',
  padding: '20px',
  webkitScrollbar: 'none',

  height: '300px',

  '@bp1': {
    padding: '40px'
  },
  '@bp2': {
    padding: '40px'
  }
});

const TextBox = styled('div', {
  display: 'block',
  position: 'relative',
  paddingLeft: '20px',
  paddingRight: '20px',
  paddingBottom: '0px',
  alignItems: 'center',

  '@bp1': {
    width: '70%'
  },
  '@bp2': {
    width: '70%'
  }
});

const Label = styled('p', {
  fontSize: '22px',
  fontWeight: '700',
  lineHeight: '0.5',
  display: 'flex',
  position: 'relative',
  alignItems: 'center',
  letterSpacing: '-0.05rem',

  '@bp1': {
    width: '70%'
  }
});

const AccountButton = styled('button', {
  zIndex: '400',
  fontFamily: '$inter',
  fontWeight: '700',
  fontSize: '13px',
  backgroundColor: '$slate8',
  color: 'white',
  py: '8px',
  height: '32px',
  borderRadius: '10px',
  border: '1px solid',
  borderColor: '$sky11',
  lineHeight: '1',
  width: 'auto',
  position: 'relative',
  paddingLeft: '20px',
  paddingRight: '20px',
  marginLeft: '20px',

  '&:hover': {
    backgroundColor: '$slate7',
    color: '$sky11',
    cursor: 'pointer'
  }
});

export const Demo = () => {
  return (
    <Box css={{ bc: '$slate1' }}>
      <Section size="2">
        <Container size="4" css={{ paddingTop: '0px', paddingBottom: '0px', px: '0px' }}>
          <Grid
            css={{
              columnGap: '2px',
              rowGap: '2px',
              gridTemplateColumns: '1fr',
              '@bp1': {
                columnGap: '2px',
                rowGap: '2px',
                gridTemplateColumns: '1fr 1fr'
              },
              '@bp2': {
                columnGap: '2px',
                rowGap: '2px',
                gridTemplateColumns: '1fr 1fr'
              }
            }}>
            <Card>
              <Box css={{ width: '100%', alignItems: 'center' }}>
                <Heading size="3" css={{ textAlign: 'center', paddingRight: '20px', paddingLeft: '20px' }}>
                  Free Sample.
                </Heading>
                <Text
                  css={{
                    textAlign: 'center',
                    paddingLeft: '20px',
                    paddingRight: '20px',
                    width: '100%',
                    fontWeight: '400',
                    fontSize: '13px',
                    lineHeight: '1.5',
                    paddingBottom: '10px',
                    color: '$slate9',

                    '@bp1': {
                      width: '100%'
                    },
                    '@bp2': {
                      width: '100%'
                    }
                  }}>
                  <p>Need a test run with some of our products, before you decide? We got you.</p>
                </Text>
              </Box>
            </Card>
            <Card>
              <Box>
                <TextBox>
                  <Label>Create an account.</Label>
                  <Text
                    css={{
                      textAlign: 'left',
                      width: '100%',
                      fontWeight: '400',
                      fontSize: '13px',
                      lineHeight: '1.5',
                      paddingBottom: '10px',
                      color: '$slate9',

                      '@bp1': {
                        width: '70%'
                      },
                      '@bp2': {
                        width: '70%'
                      }
                    }}>
                    <p>
                      Create an account with us, and we’ll send you a Free Demo (Version– 1.0) of <strong>Ady® Interval</strong>, and a
                      sample pack of design elements, textures, and more!
                    </p>
                  </Text>
                </TextBox>
                <NextLink href="https://api.ady.world" passHref>
                  <Link href="https://api.ady.world">
                    <AccountButton>Sign Up Now ➔</AccountButton>
                  </Link>
                </NextLink>
              </Box>
            </Card>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
};
