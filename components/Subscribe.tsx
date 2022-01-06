import React from 'react';
import Head from 'next/head';

import { Box } from '@design-system/box';
import { Text } from '@design-system/text';

export const Subscribe = () => {
  return (
    <Box css={{ height: 'auto' }}>
      <Head>
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WiNjPw"></script>
      </Head>
      <Section size="2" css={{}}>
        <div className="klaviyo-form-Y4dwX7"></div>
      </Section>
    </Box>
  );
};
