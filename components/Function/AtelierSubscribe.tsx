import React from 'react';
import Head from 'next/head';
// import { Klaviyo } from 'node-klaviyo';
import { Box } from '@atelier/box';
import { Heading } from '@atelier/heading';
import { Text } from '@atelier/text';
import { TextField } from '@atelier/text-field';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { DefaultButton } from '@components/DefaultButton';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export const AtelierSubscribe = () => {
  return (
    <Section size="2" css={{ paddingTop: '150px', alignItems: 'center', textAlign: 'center' }}>
      <Container size="3" css={{ boxSizing: 'border-box' }}>
        <Heading size="3" css={{ paddingBottom: '20px' }}>
          Join the conversation.
        </Heading>
        <TextField size="3" css={{ width: '400px' }} type="email" placeholder="Enter email address" />
        <Heading as="a" href="/" size="1" css={{ paddingTop: '10px', fontWeight: '700' }}>
          Submit <ArrowRightIcon />
        </Heading>
      </Container>
    </Section>
  );
};
