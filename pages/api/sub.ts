// import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req, res) {
  const options = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      profiles: [{ email: 'george.washington@klaviyo.com' }],
    }),
  };

  fetch('https://a.klaviyo.com/api/v2/list/SjPAZJ/subscribe?api_key=WiNjPw', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));

  const data = await result.json();

  if (!result.ok) {
    return res.status(500).json({ error: data.error.email[0] });
  }

  return res.status(201).json({ error: '' });
}
