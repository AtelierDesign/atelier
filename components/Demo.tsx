import { Grid } from '@design-system/grid';
import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { Section } from '@design-system/section';
import { Heading } from '@design-system/heading';
import { Flex } from '@design-system/flex';
import { TextField } from '@design-system/text-field';

import { styled } from '@stitches/react';

const Card = styled('div', {
  display: 'flex',
  backgroundColor: '$slate3',
  position: 'relative',

  borderRadius: '0px',
  padding: '20px',
  alignItems: 'center',
  webkitScrollbar: 'none',

  height: '300px',

  '@bp1': {
    padding: '40px'
  },
  '@bp2': {
    padding: '40px'
  }
});

const Label = styled('p', {
  fontSize: '18px',
  fontWeight: '700',
  lineHeight: '1',
  display: 'flex',
  position: 'absolute',
  top: '0',
  paddingTop: '30px',
  paddingLeft: '10px',
  paddingRight: '10px',
  alignItems: 'center',

  '@bp1': {
    width: '70%',
    paddingTop: '40px'
  }
});

const SubLabel = styled('p', {
  fontSize: '13px',
  lineHeight: '1.5',
  display: 'flex',
  position: 'absolute',
  top: '0',
  paddingTop: '60px',
  paddingBottom: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  alignItems: 'center',

  width: '80%',

  '@bp1': {
    width: '70%',
    paddingTop: '70px'
  }
});

const AccountButton = styled('button', {
  zIndex: '400',
  fontFamily: '$jetbrain',
  fontWeight: '700',
  fontSize: '13px',
  backgroundColor: '$slate8',
  color: 'white',
  paddingLeft: '30px',
  paddingRight: '30px',
  py: '6px',
  height: '32px',
  borderRadius: '6px',
  border: '1px solid',
  borderColor: '$sky11',
  lineHeight: '1',
  width: 'auto',
  position: 'absolute',
  bottom: '0',
  left: '28px',
  marginBottom: '72px',

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
              <Heading size="3" css={{ textAlign: 'right' }}>
                FREE DEMO?
              </Heading>
            </Card>
            <Card>
              <Box>
                <Label>Create an account.</Label>
                <SubLabel>
                  Sign up to receive news on new products and sales, and we’ll send you a sample pack of free elements, glitches, and
                  textures!
                </SubLabel>
              </Box>
              <Flex css={{ ai: 'center', mt: '$6', width: '100%', paddingLeft: '8px', paddingRight: '8px', '@bp2': { width: '50%' } }}>
                <TextField size="2" placeholder="Email address" cursor="text" />
                <AccountButton>Sign Up</AccountButton>
              </Flex>
            </Card>
          </Grid>
        </Container>
      </Section>
    </Box>
  );
};
