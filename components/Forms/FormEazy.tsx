import React from 'react';
import axios from 'axios';

export const FormEazy = () => {
  async function handleSubmit(e) {
    e.preventDefault();

    // Use fetch or axios to submit the form
    await axios
      .post(
        'https://formeezy.com/api/v1/forms/61d1f4930cbf820008a1b976/submissions',
        new FormData(e.target),
      )
      .then(({ data }) => {
        const { redirect } = data;
        // Redirect used for reCAPTCHA and/or thank you page
        window.location.href = redirect;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Enter email" required />
      <input name="bot-field" type="text" style={{ display: 'none' }} />
      <button type="submit">Send</button>
    </form>
  );
};
