import { Box } from '@design-system/box';
import { Text } from '@design-system/text';

export const Copyrights = () => {
  return (
    <Box css={{ height: 'auto' }}>
      <Text css={{ color: '$gray12', fontFamily: '$inter', fontSize: '9px', lineHeight: '1' }}>
        Copyright © 2022
      </Text>
    </Box>
  );
};
