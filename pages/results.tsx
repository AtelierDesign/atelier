import { NextPage } from 'next';
import { useRouter } from 'next/router';

import PrintObject from '@components/Stripe.js/PrintObject';
import Cart from '@components/Stripe.js/Cart';
import ClearCart from '@components/Stripe.js/ClearCart';

import { fetchGetJSON } from '@utils/api-helpers';
import useSWR from 'swr';

import { Container } from '@atelier/container';
import { Text } from '@atelier/text';
import { Section } from '@atelier/section';
import { Heading } from '@atelier/heading';

const Results: NextPage = () => {
  const router = useRouter();

  // Fetch CheckoutSession from static page via
  // https://nextjs.org/docs/basic-features/data-fetching#static-generation
  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout_sessions/${router.query.session_id}` : null,
    fetchGetJSON,
  );

  if (error) return <div>failed to load</div>;

  return (
    <Container size="3">
      <Heading size="2">Checkout Payment Result</Heading>
      <Heading size="1">Status: {data?.payment_intent?.status ?? 'loading...'}</Heading>
      <Text size="2">CheckoutSession response:</Text>
      <PrintObject content={data ?? 'loading...'} />
      <Cart>
        <ClearCart />
      </Cart>
    </Container>
  );
};

export default Results;
