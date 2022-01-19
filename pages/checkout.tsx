import { NextPage } from 'next';

import CheckoutForm from '@components/Stripe.js/CheckoutForm';

import { Section } from '@atelier/section';
import { Container } from '@atelier/container';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';

const Checkout: NextPage = () => {
  return (
    <Section size="3">
      <Container size="3">
        <Heading size="1">Donate with Checkout</Heading>
        <Paragraph>Donate to our project</Paragraph>

        <CheckoutForm />
      </Container>
    </Section>
  );
};

export default Checkout;
