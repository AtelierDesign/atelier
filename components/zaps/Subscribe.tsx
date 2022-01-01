import React from 'react';

import { Flex } from '@design-system/flex';
// import { Heading } from '@design-system/heading';
// import { Box } from '@design-system/box';
import { Container } from '@design-system/container';
import { TextField } from '@design-system/text-field';
// import { Button } from '@design-system/button';
// import { DefaultButton } from '@components/DefaultButton';

import { styled } from 'stitches.config';

const CoverBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

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

export function Subscribe() {
  const registerUser = async event => {
    event.preventDefault(); // don't redirect the page
    // const data = new FormData(event.currentTarget);

    // ADD LOGIC
    const res = await fetch('/api/subscriber', {
      body: JSON.stringify({
        email: event.target.email.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    // result.email => 'example@ady.world';
    //*
    /*console.log({
    /  email: data.get('email'),
    /});
    */
  };

  return (
    <CoverBox>
      <Flex css={{ alignItems: 'center', gap: '$6' }}>
        <Container size="2">
          <form onSubmit={registerUser}>
            {/* <!-- <label htmlFor="name">Name</label> --> */}
            {/* <!-- <input id="name" name="name" type="text" autoComplete="name" required /> --> */}
            <TextField
              size="2"
              placeholder="Email address"
              id="email"
              name="name"
              type="text"
              autoComplete="email"
              required
            />
            <SubmitButton as="button" type="submit" css={{}}>
              Submit
            </SubmitButton>
          </form>
        </Container>
      </Flex>
    </CoverBox>
  );
}

{
  /*
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
*/
}
