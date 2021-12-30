import React from 'react';
import { Box } from '@design-system/box';
import { theme } from 'stitches.config';

export function HeroContainer({ css, children }: { css?: any; children?: React.ReactNode }) {
  return (
    <Box
      // In case any semantic content sneaks through in a hero, let's hide it
      role="presentation"
      className={`${theme}`}
      css={{
        backgroundImage: 'linear-gradient(330deg, $sky4 0%, $sky11 100%)',
        position: 'relative',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        py: '150px',
        borderRadius: '$3',
        ...(css as any),

        '@bp2': { mx: '-$7' },
        '@bp3': { mx: '-$8' },
      }}
    >
      {children}
    </Box>
  );
}
