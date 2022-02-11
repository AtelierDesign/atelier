// REACT & NEXT IMPORTS
import React from 'react';
import { useFormik } from 'formik';

// ATELIER® DESIGN SYSTEM
import { Box } from '@atelier/box';
import { Heading } from '@atelier/heading';
import { TextField } from '@atelier/text-field';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Button } from '@atelier/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';

// Subscribe Component
export const AtelierSubscribe = () => {
  const subscribe = async e => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    trackGoal('JYFUFMSF', 0);
    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`,
    });
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      subscribe(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box>
      <Section size="2" css={{ paddingBottom: '5rem', paddingTop: '5rem', alignItems: 'center', textAlign: 'center' }}>
        <Container size="3" css={{ boxSizing: 'border-box' }}>
          {/* <!-- HEADING v1 --> */}
          <Heading size="3" css={{ paddingBottom: '20px' }}>
            Join the Conversation.
          </Heading>

          {/* <!-- BEGIN FORM --> */}
          <form onSubmit={formik.handleSubmit}>
            <Box css={{ display: 'flex', flexDirection: 'column', margin: 'auto', alignItems: 'center' }}>
              <TextField
                size="3"
                css={{ width: '100%', maxWidth: '400px', minWidth: '200px' }}
                onChange={formik.handleChange}
                value={formik.values.email}
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
                Submit {` `}
                <Box css={{ marginLeft: '6px' }}>
                  <ChevronRightIcon />
                </Box>
              </Button>
            </Box>
          </form>
        </Container>
      </Section>
    </Box>
  );
};
