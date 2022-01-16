import React from 'react';
import { useField, Form, FormikProps, Formik } from 'formik';

// ATELIER® DESIGN SYSTEM
import { Button } from '@atelier/button';
import { Heading } from '@atelier/heading';
import { ArrowRightIcon } from '@radix-ui/react-icons';

// STITCHES
import { styled } from 'stitches.config';

interface Values {
  email: string;
}

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

const AdyForm = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <Heading as="label" size="3" css={{ paddingBottom: '20px' }}>
        {label}
        <Input as="input" {...field} {...props} />
      </Heading>
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export const AtelierAcademy = () => (
  <div>
    {/* <!-- SET FORMIK INITIAL VALUES --> */}
    <Formik
      initialValues={{
        email: '',
      }}
      // SET onSUBMIT FUNCTION STATEMENT
      onSubmit={(values, actions) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}>
      {/* <!-- ENABLE PROPS --> */}
      {(props: FormikProps<Values>) => (
        <Form>
          <AdyForm name="email" type="email" label="Join the conversation." placeholder="you@ady.world" />
          <Button
            as="button"
            type="submit"
            variant="ghost"
            css={{
              backgroundColor: 'transparent',
              color: '$superLime',
              bordler: '0',
              position: 'relative',
              paddingTop: '0px',
              fontWeight: '700',
              fontSize: '16px',

              '&:hover': {
                cursor: 'pointer',
                // opacity: '0.8',
                // color: '#96F550',
                color: '$gray12',
              },
            }}>
            Submit {` `}
            <ArrowRightIcon />
          </Button>
        </Form>
      )}
    </Formik>
  </div>
);
