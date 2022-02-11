import React from 'react';
import Head from 'next/head';
// import { Klaviyo } from 'node-klaviyo';
import { Box } from '@atelier/box';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import { Container } from '@atelier/container';
import { AtelierButton } from '@ui/buttons/AtelierButton';

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

      <AtelierButton color="blue">
        <Text>Click to reload!</Text>
      </AtelierButton>
    </Box>
  );
};
