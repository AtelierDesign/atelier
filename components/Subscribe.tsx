import React from 'react';
import Head from 'next/head';
// import { Klaviyo } from 'node-klaviyo';
import { Box } from '@design-system/box';
import { Heading } from '@design-system/heading';
import { Text } from '@design-system/text';
import { Container } from '@design-system/container';
import { DefaultButton } from '@components/DefaultButton';

/*
const KlaviyoClient = new Klaviyo({
  publicToken: 'process.env.KLAVIYO_PUBLIC_API_KEY',
  privateToken: 'process.env.KLAVIYO_PUBLIC_API_KEY',
});
*/

export const Subscribe = () => {
  return (
    <Box css={{ height: 'auto' }}>
      <Head>
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=WiNjPw"></script>
      </Head>

      <Heading size="2" css={{}}>
        Subscribe.
      </Heading>
      <Container size="1" css={{}}>
        <div className="klaviyo-form-Y4dwX7"></div>
      </Container>

      <DefaultButton css={{ color: '$gray12' }}>
        <Text>Click to reload!</Text>
      </DefaultButton>
    </Box>
  );
};
