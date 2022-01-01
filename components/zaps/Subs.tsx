import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import { TextField } from '@design-system/text-field';
import { Container } from '@design-system/container';
import { Heading } from '@design-system/heading';

import { styled } from 'stitches.config';

type Inputs = {
  email: string;
};

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

export function Subs() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

  console.log(watch('email')); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <Container size="1">
      <Heading size="3" css={{ fontFamily: '$neueplak', fontSize: '600', marginBottom: '20px' }}>
        SUBSCRIBE
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          size="2"
          required
          placeholder="Email address"
          id="email"
          defaultValue=""
          {...register('email')}
        />

        {errors.email && <span>This field is required</span>}

        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </Container>
  );
}
