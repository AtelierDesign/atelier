import { useState, useRef } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
// import { trackGoal } from 'fathom-client';

import fetcher from '@lib/fetcher';
import { Form, FormState } from 'lib/types';
import SuccessMessage from '@components/SuccessMessage';
import ErrorMessage from '@components/ErrorMessage';
import LoadingSpinner from '@components/LoadingSpinner';

// ATELIER® DESIGN SYSTEM
import { Box } from '@atelier/box';
import { Heading } from '@atelier/heading';
import { TextField } from '@atelier/text-field';
import { Container } from '@atelier/container';
import { Paragraph } from '@atelier/paragraph';
import { Section } from '@atelier/section';
import { Button } from '@atelier/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';

export const Subscribe = () => {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  // const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);

  const subscribe = async e => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/sub', {
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

    // trackGoal('JYFUFMSF', 0);
    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`,
    });
  };

  return (
    <Box>
      <form onSubmit={subscribe}>
        <Box css={{ display: 'flex', flexDirection: 'column', margin: 'auto', alignItems: 'center' }}>
          <TextField
            size="3"
            css={{ width: '100%', maxWidth: '400px', minWidth: '200px' }}
            ref={inputEl}
            aria-label="Email for newsletter"
            placeholder="you@ady.world"
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
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
            {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
          </Button>
        </Box>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <Paragraph>
          <Link href="/">
            <a>34 issues</a>
          </Link>
        </Paragraph>
      )}
    </Box>
  );
};
