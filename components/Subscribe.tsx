import React from 'react';
import Head from 'next/head';
import { Klaviyo } from 'node-klaviyo';
import { Box } from '@design-system/box';
import { Text } from '@design-system/text';

const KlaviyoClient = new Klaviyo({
  publicToken: 'process.env.KLAVIYO_PUBLIC_API_KEY',
  privateToken: 'process.env.KLAVIYO_PUBLIC_API_KEY',
});

// Get the list of Klaviyo lists on the account.
KlaviyoClient.lists.getLists();

// Uses the subscribe endpoint to subscribe user to list, this obeys the list opt-in settings.
KlaviyoClient.lists.addSubscribersToList({
  listId: 'myListId',
  profiles: [
    {
      email: 'pizza.dave@mailinator.com',
      pizzaSubscriptionType: 'Premium',
    },
    {
      email: 'salami.sam@mailinator.com',
      phone_number: '+12223334444',
      sms_consent: true,
    },
    {
      email: 'lasagna.larry@mailinator.com',
      push_token: 'myPushToken',
    },
  ],
});

// Check if profiles are on a list and not suppressed.
KlaviyoClient.lists.getSubscribersFromList({
  listId: 'myListId',
  emails: ['pizza.dave@mailinator.com', 'salami.sam@mailinator.com', 'lasagna.larry@mailinator.com'],
  phoneNumbers: ['+12223334444', '+15556667777'],
  pushTokens: ['myPushToken'],
});

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
