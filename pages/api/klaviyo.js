{/*
import Klaviyo from 'node-klaviyo';
import KlaviyoClient from 'node-klaviyo';
import { public } from 'node-klaviyo';


export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}

const Klaviyo = require('node-klaviyo');

const KlaviyoClient = new Klaviyo({
    publicToken: env('KLAVIYO_PUBLIC_API_KEY'),
    privateToken: env('KLAVIYO_PRIVATE_API_KEY')
});



export default Klaviyo({

// Identify a user - create/update a profile in Klaviyo
  KlaviyoClient.public.identify({
    email: 'pizza.dave@mailinator.com',
    properties: {
        $first_name: 'Pizza',
        $last_name: 'Dave',
        favoriteFood: 'Pad thai'
    },
    post: true //defaults to false
  }),
  // Track a user's behavior - create an event in Klaviyo
  KlaviyoClient.public.track({
    event: 'Ordered Pizza',
    email: 'pizza.dave@mailinator.com',
    properties: {
        items: [
            {
                size: 'Large',
                toppings: [
                    'Pepperoni',
                    'Onions',
                    'Smoked Gouda'
                ],
                price: 23.99
            }
        ],
        $value: 23.99
    },
    customerProperties: {
        likesOnions: true
    },
    timestamp: 1532806824
  }),
  // Uses the subscribe endpoint to subscribe user to list, this obeys the list opt-in settings.
  KlaviyoClient.lists.addSubscribersToList({
    listId: 'SjPAZJ',
    profiles: [
        {
            email: 'chan@hldtru.com',
            $source: 'Manually Initiated'
        },
        {
            email: 'salami.sam@mailinator.com',
        },
        {
            email: 'lasagna.larry@mailinator.com',
            push_token: 'myPushToken'
        }
    ]
  }),
  // Request a data privacy-compliant deletion for a person record
  KlaviyoClient.dataPrivacy.requestProfileDeletion({
    identifier: 'pizza.dave@mailinator.com',
    id_type: 'email' //can also use 'phone_number' or 'person_id'
  });
  );
}
*/}
