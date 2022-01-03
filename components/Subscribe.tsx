import { useState, useRef } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
// import { trackGoal } from 'fathom-client';

import fetcher from '@lib/fetcher';
import { Form, FormState } from '@lib/types';
import { TextField } from '@design-system/text-field';
import SuccessMessage from '@components/SuccessMessage';
import ErrorMessage from '@components/ErrorMessage';
import LoadingSpinner from '@components/LoadingSpinner';

export function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const subscriberCount = new Number(data?.count);

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

    // trackGoal('JYFUFMSF', 0);
    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `thank you! You're now on the list.`,
    });
  };

  return (
    <div>
      <p>Subscribe to the newsletter</p>
      <p>Get emails from me about web development, tech, and early access to new articles.</p>
      <form onSubmit={subscribe}>
        <TextField
          as="input"
          size="2"
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          type="email"
          autoComplete="email"
          required
        />
        <button type="submit">
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p>Already Sub?</p>
      )}
    </div>
  );
}
