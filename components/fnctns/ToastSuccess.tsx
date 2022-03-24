import React from 'react';
import toast, { Toaster, useToaster } from 'react-hot-toast';
import { Container } from '@atelier/container';

// Stitches
import { styled } from '@stitches/react';

export const ToastSuccess = () => {
  // Toast..
  return (
    <Container size="1" css={{}}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        // containerStyle={{}}

        // Options..
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </Container>
  );
};
