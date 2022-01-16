import { Button } from '@atelier/button';
import { Heading } from '@atelier/heading';

import React from 'react';
import { useFormik } from 'formik';

import { styled } from 'stitches.config';

const Input = styled('input', {
  appearance: 'none',
  borderWidth: '0',
  boxSizing: 'border-box',
  fontFamily: '$inter',
  fontSize: '13px',
  fontWeight: '600',
  marginTop: '10px',
  marginBottom: '5px',
  // CUSTOM
  backgroundColor: '$loContrast',
  boxShadow: 'inset 0 0 0 2px $colors$slate7',
  color: '$hiContrast',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',
  '&::before': {
    boxSizing: 'border-box',
  },
  '&::after': {
    boxSizing: 'border-box',
  },

  // SIZE="3"
  borderRadius: '12px',
  height: '50px',
  paddingLeft: '14px',
  paddingRight: '14px',
  width: '100%',
  lineHeight: 'normal',

  '&:focus': {
    backgroundColor: '$loContrast',
    boxShadow: 'inset 0px 0px 0px 1px $colors$superLime, 0px 0px 0px 1px $colors$superLime',
  },
  '&:-webkit-autofill': {
    boxShadow: 'inset 0 0 0 2px $gray12, inset 0 0 0 100px $gray8',
  },
  '&:-webkit-autofill::first-line': {
    fontSize: '13px',
    fontFamily: '$inter',
    color: '$hiContrast',
  },
});

const Button = styled('button', {
  // Reset
  inclue: ['box'],
  all: 'unset',
  alignItems: 'center',
  userSelect: 'none',

  // Custom reset?
  display: 'inline-flex',
  flexShrink: 0,
  justifyContent: 'center',
  lineHeight: '1',
  WebkitTapHighlightColor: 'rgba(0,0,0,0)',

  // Custom
  height: '$5',
  px: '$2',
  fontFamily: '$inter',
  fontSize: '$2',
  fontWeight: 500,
  fontVariantNumeric: 'tabular-nums',

  '&:disabled': {
    backgroundColor: '$slate2',
    boxShadow: 'inset 0 0 0 1px $colors$slate7',
    color: '$slate8',
    pointerEvents: 'none',
  },

  marginLeft: '-1px',
  height: '$6',
  fontSize: '$3',
  lineHeight: '$sizes$6',
});

export const FormPrimitive = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        as="input"
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};
