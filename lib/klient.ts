import { Klaviyo } from 'node-klaviyo';

const KlaviyoClient = new Klaviyo({
  publicToken: process.env.KLAVIYO_PUBLIC_API_KEY,
  privateToken: process.env.KLAVIYO_PRIVATE_TOKEN,
});

export { KlaviyoClient };

{
  /*
const KlaviyoClient = new Klaviyo({
  publicToken: process.env.KLAVIYO_PUBLIC_API_KEY,
  privateToken: process.env.KLAVIYO_PRIVATE_TOKEN,
});
*/
}
