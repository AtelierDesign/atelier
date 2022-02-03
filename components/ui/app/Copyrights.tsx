import { Box } from '@atelier/box';
import { Text } from '@atelier/text';

export const Copyrights = () => {
  return (
    <Box css={{ height: 'auto' }}>
      <Text css={{ color: '$gray12', fontFamily: '$inter', fontSize: '9px', lineHeight: '1' }}>
        Copyright © 2022 / Atelier Design Yield®
      </Text>
    </Box>
  );
};
