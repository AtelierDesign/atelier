const fetch = require('node-fetch');

const url = 'https://a.klaviyo.com/api/v2/list/LIST_ID/subscribe?api_key=API_KEY';

const options = {
  method: 'POST',
  headers: { Accept: 'application/json', 'Content-Type': 'application/json' },

  body: JSON.stringify({
    profiles: [{ email: 'george.washington@klaviyo.com' }],
  }),
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
