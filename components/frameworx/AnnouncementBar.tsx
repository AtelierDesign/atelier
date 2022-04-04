import React from 'react';
import { Container } from '@atelier/container';

export const AnnouncementBar = ({ children }) => {
  return (
    <>
      {/* <!-- Announcement Outer --> */}
      <Container size="3" css={{ marginTop: '100px', marginBottom: '100px' }}>
        {/* <!-- Announcement Bar div --> */}
        <Box css={{ bc: '$slate4', width: '100%', alignItems: 'left', margin: 'auto', padding: '30px' }}>{children}</Box>
      </Container>
    </>
  );
};
