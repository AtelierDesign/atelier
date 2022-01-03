import { Box } from '@design-system/box';
import { Text } from '@design-system/text';

export const Copyrights = () => {
  return (
    <Box css={{ height: 'auto' }}>
      <Text css={{ fontFamily: '$jetbrain', fontSize: '11px', lineHeight: '1' }}>
        Copyright © 2022
      </Text>
    </Box>
  );
};
