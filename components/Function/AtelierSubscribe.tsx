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
import { Button } from '@atelier/button';
import { ArrowRightIcon } from '@radix-ui/react-icons';

export const AtelierSubscribe = () => {
  const subscribeUser = async event => {
    event.preventDefault(); // don't redirect the page
    // where we'll add our form logic

    const res = await fetch('https://hooks.zapier.com/hooks/catch/123456/abcde', {
      body: JSON.stringify({
        name: event.target.name.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    // result.user => 'Ada Lovelace'
  };

  return (
    <Section size="2" css={{ paddingBottom: '4rem', paddingTop: '4rem', alignItems: 'center', textAlign: 'center' }}>
      <Container size="3" css={{ boxSizing: 'border-box' }}>
        <Heading size="3" css={{ paddingBottom: '20px' }}>
          Join the conversation.
        </Heading>

        <form onSubmit={subscribeUser}>
          <Box css={{ display: 'flex', flexDirection: 'column', margin: 'auto', alignItems: 'center' }}>
            <TextField
              size="3"
              css={{ width: '100%', maxWidth: '400px', minWidth: '200px' }}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter email address"
            />

            <Button
              variant="ghost"
              type="submit"
              name="email"
              onSubmit={subscribeUser}
              size="1"
              css={{
                backgroundColor: 'transparent',
                color: '$sky8',
                bordler: '0',
                position: 'relative',
                paddingTop: '10px',
                fontWeight: '700',
                fontSize: '16px',

                '&:hover': {
                  cursor: 'pointer',
                  opacity: '0.8',
                  color: '$lime9',
                },
              }}>
              Submit <ArrowRightIcon />
            </Button>
          </Box>
        </form>
      </Container>
    </Section>
  );
};
