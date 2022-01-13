import React from 'react';
import { Box } from '@atelier/box';
import { theme } from 'stitches.config';

export function OneHundredView({ css, children }: { css?: any; children?: React.ReactNode }) {
  return (
    <Box
      // In case any semantic content sneaks through in a hero, let's hide it
      role="presentation"
      className={`${theme}`}
      css={{
        //  backgroundImage: `radial-gradient(circle 400px at 300px 200px, $lime9, $$transparent)`,
        height: '100%',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        py: '100px',
        borderRadius: '$3',
        ...(css as any),

        '@bp2': { mx: '-$7' },
        '@bp3': { mx: '-$8' },
      }}>
      {children}
    </Box>
  );
}
