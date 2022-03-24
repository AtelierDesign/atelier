import React from 'react';
import { Container } from '@atelier/container';
import { Grid } from '@atelier/grid';

export const GridCollapse = ({ children }) => {
  return (
    <>
      <Container size="4" css={{ paddingTop: '50px', paddingBottom: '80px', px: '8px' }}>
        <Grid
          css={{
            gap: '8px',
            marginBottom: '8px',
            paddingBottom: '0',
            gridTemplateColumns: '1fr',
            '@bp1': {
              gap: '8px',
              gridTemplateColumns: '1fr 1fr',
            },
            '@bp2': {
              gap: '8px',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
            },
          }}>
          {/* <!-- Grid Parent - 3 Rows Only --> */}
          {children}
        </Grid>
      </Container>
    </>
  );
};
