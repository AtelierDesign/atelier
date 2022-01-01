import React from 'react';
import { useState, useRef } from 'react';
import ZapierForm from 'react-zapier-form';
import useSWR from 'swr';
import { TextField } from '@design-system/text-field';
import { Container } from '@design-system/container';
import { Heading } from '@design-system/heading';

import { trackGoal } from 'fathom-client';

import fetcher from 'utils/fetch';
import { Form, FormState } from 'utils/types';

import { styled } from 'stitches.config';

//

const SubmitButton = styled('button', {
  // zIndex: '400',
  fontFamily: '$inter',
  fontWeight: '600',
  fontSize: '13px',
  backgroundColor: '$orange9',
  color: '$',
  paddingLeft: '20px',
  paddingRight: '20px',
  // py: '4px',
  height: '28px',
  borderRadius: '6px',
  border: '0',
  // borderColor: '$gray12',
  lineHeight: '1',
  width: '100%',
  position: 'relative',
  // bottom: '0',
  // left: '30px',
  marginBottom: '32px',

  '&:hover': {
    backgroundColor: '$slate7',
    color: '$sky11',
    cursor: 'pointer',
  },
});

export function Zap() {
  const inputEl = useRef(null);
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const subscriberCount = new Number(data?.count);

  const registerEmail = async event => {
    event.preventDefault();

    const res = await fetch('https://hooks.zapier.com/hooks/catch/11572956/b1q0ciw', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    inputEl.current.value = '';
    // result.user => 'Ada Lovelace'
  };

  return (
    <>
      <Heading size="2">SUBSCRIBE</Heading>
      <Container size="2">
        <ZapierForm
          onSubmit={registerEmail}
          action="https://hooks.zapier.com/hooks/catch/11572956/b1q0ciw">
          {({ error, loading, success }) => {
            return (
              <div>
                {!success && !loading && (
                  <div>
                    <TextField
                      as="input"
                      ref={inputEl}
                      size="2"
                      required
                      name="email"
                      placeholder="Email address"
                      id="email"
                    />
                    <SubmitButton type="submit">Submit</SubmitButton>
                  </div>
                )}
                {loading && <div>Loading...</div>}
                {error && <div>Something went wrong. Please try again later.</div>}
                {success && <div>Thank you for contacting us!</div>}
              </div>
            );
          }}
        </ZapierForm>
      </Container>
    </>
  );
}
