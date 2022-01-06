import type { NextApiRequest, NextApiResponse } from 'next';
import { Klaviyo } from 'node-klaviyo';

const KlaviyoClient = new Klaviyo({
  publicToken: process.env.KLAVIYO_PUBLIC_API_KEY,
  privateToken: process.env.KLAVIYO_PRIVATE_API_KEY,
});

// Get the list of Klaviyo lists on the account.
KlaviyoClient.lists.getLists();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email } = req.body;

  const options = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      profiles: [{ email: 'george.washington@klaviyo.com' }],
    }),
  };

  fetch('https://a.klaviyo.com/api/v2/list/LIST_ID/subscribe?api_key=KLAVIYO_PUBLIC_API_KEY', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
