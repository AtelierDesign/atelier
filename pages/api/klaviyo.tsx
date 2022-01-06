import type { NextApiRequest, NextApiResponse } from 'next';

const api_key = process.env.KLAVIYO_PUBLIC_API_KEY;
const list_id = process.env.KLAVIYO_LIST_ID;

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
