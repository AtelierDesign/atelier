import { Box } from '@atelier/box';

export const FormLine = () => {
  return (
    <Box
      css={{
        backgroundColor: '$translucent',
        height: '1px',
        width: '35vw',
        marginLeft: '20px',
        marginRight: '20px',
        marginBottom: '5px',

        '@sm': {
          width: '60vw',
          marginLeft: '0px',
          marginRight: '0px',
        },

        '@xs': {
          width: '90vw',
          marginLeft: '0px',
          marginRight: '0px',
        },
      }}
    />
  );
};
