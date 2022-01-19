import React from 'react';
import { NextPage } from 'next';

import Cart from '@components/Stripe.js/Cart';
import CartSummary from '@components/Stripe.js/CartSummary';
import Products from '@components/Stripe.js/Products';

import { Section } from '@atelier/section';
import { Container } from '@atelier/container';
import { Heading } from '@atelier/heading';
import { Paragraph } from '@atelier/paragraph';

const ShoppingCart: NextPage = () => {
  return (
    <>
      <Section size="3">
        <Container size="3">
          <Heading size="1">Shopping Cart</Heading>
          <Paragraph>
            Powered by the <a href="https://use-shopping-cart.netlify.app/">use-shopping-cart</a> React hooks library.
          </Paragraph>

          <Cart>
            <CartSummary />
            <Products />
          </Cart>
        </Container>
      </Section>
    </>
  );
};

export default ShoppingCart;
