import { Demo } from '@components/Demo';
import { Box } from '@design-system/box';

import 'stitches.config';

export default function Test() {
  return (
    <Box css={{ padding: '0px' }}>
      <Demo />
    </Box>
  );
}
