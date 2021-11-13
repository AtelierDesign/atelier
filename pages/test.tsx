import { Box } from '@design-system/box';
import { TimeCode } from '@components/Time/TimeCode';
import { NavbarSticky } from '@components/NavbarSticky';

import 'stitches.config';

export default function Test() {
  return (
    <Box css={{ padding: '0px' }}>
      <NavbarSticky />
      <TimeCode />
    </Box>
  );
}
