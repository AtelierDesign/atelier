import React from 'react';
import NextLink from 'next/link';

import { Box } from '@atelier/box';
import { Grid } from '@atelier/grid';
import { Text } from '@atelier/text';
import { Container } from '@atelier/container';
import { Heading } from '@atelier/heading';
import { Section } from '@atelier/section';

export const SocialSection = () => {
  return (
    <Section size="3" css={{ paddingTop: '120px' }}>
      <Container size="2" css={{ px: '0' }}>
        <Grid
          gap="2"
          flow={{ '@initial': 'row', '@bp2': 'column' }}
          css={{
            justifyContent: 'space-between',
            '@bp2': { gridAutoColumns: '240px' },
          }}>
          {/* <!-- TWITTER --> */}
          <NextLink href="https://twitter.com/_adyworld" passHref>
            <Box
              css={{
                p: '$5',
                backgroundColor: '$transparent',
                borderRadius: '$4',
                // boxShadow: 'inset 0 0 0 1px $colors$slate5',

                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              <Box css={{ mb: '$3' }}>
                <svg width="23" height="23" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M29.0071 6.72402C27.9751 7.18435 26.8679 7.49688 25.7063 7.63625C26.8929 6.91829 27.8038 5.778 28.23 4.42233C27.1186 5.08961 25.8901 5.57106 24.5823 5.8329C23.5336 4.70529 22.0419 4 20.3873 4C17.216 4 14.6421 6.60154 14.6421 9.80701C14.6421 10.2632 14.6923 10.7065 14.7926 11.1289C10.0168 10.8881 5.78415 8.57381 2.95126 5.06004C2.45822 5.91737 2.1741 6.91406 2.1741 7.97833C2.1741 9.99284 3.18943 11.7708 4.73122 12.8097C3.7911 12.7802 2.9053 12.5183 2.12814 12.0833C2.12814 12.1087 2.12814 12.1298 2.12814 12.1551C2.12814 14.9678 4.10865 17.3161 6.73681 17.8482C6.2563 17.9791 5.74655 18.0508 5.22426 18.0508C4.85239 18.0508 4.49306 18.0128 4.14208 17.9452C4.87328 20.2512 6.99586 21.9321 9.50702 21.9785C7.53904 23.5369 5.06549 24.466 2.37048 24.466C1.90669 24.466 1.45125 24.4364 1 24.3857C3.54041 26.0329 6.56132 26.9957 9.80786 26.9957C20.3748 26.9957 26.1534 18.148 26.1534 10.4743C26.1534 10.2209 26.1492 9.97172 26.1367 9.72255C27.2606 8.90323 28.2342 7.8812 29.003 6.71557L29.0071 6.72402Z"
                    fill="#1D9BF0"
                  />
                </svg>
              </Box>
              <Heading as="h3" css={{ fontSize: '16px', mb: '$2', fontWeight: '600' }}>
                Twitter
              </Heading>
              <Text css={{ lineHeight: '1.5', fontWeight: '400', fontSize: '13px' }}>
                For announcements, blog posts, and general Radix tips. We Tweet often.
              </Text>
            </Box>
          </NextLink>

          {/* <!-- INSTAGRAM --> */}
          <NextLink href="https://instagram.com/ady.world" passHref>
            <Box
              css={{
                p: '$5',
                backgroundColor: '$transparent',
                borderRadius: '$4',
                // boxShadow: 'inset 0 0 0 1px $colors$slate5',

                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              <Box css={{ mb: '$3' }}>
                <svg width="22" height="22" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15,1c-3.8,0-4.3,0-5.8,0.1C7.7,1.1,6.7,1.4,5.8,1.7C4.9,2.1,4.1,2.6,3.3,3.3C2.6,4.1,2.1,4.9,1.7,5.8
                    C1.4,6.7,1.1,7.7,1.1,9.2C1,10.7,1,11.2,1,15c0,3.8,0,4.3,0.1,5.8c0.1,1.5,0.3,2.5,0.7,3.4c0.4,0.9,0.8,1.7,1.6,2.5
                    c0.8,0.8,1.6,1.3,2.5,1.6c0.9,0.3,1.9,0.6,3.4,0.7c1.5,0.1,2,0.1,5.8,0.1c3.8,0,4.3,0,5.8-0.1c1.5-0.1,2.5-0.3,3.4-0.7
                    c0.9-0.4,1.7-0.8,2.5-1.6c0.8-0.8,1.3-1.6,1.6-2.5c0.3-0.9,0.6-1.9,0.7-3.4c0.1-1.5,0.1-2,0.1-5.8c0-3.8,0-4.3-0.1-5.8
                    c-0.1-1.5-0.3-2.5-0.7-3.4c-0.4-0.9-0.8-1.7-1.6-2.5c-0.8-0.8-1.6-1.3-2.5-1.6c-0.9-0.3-1.9-0.6-3.4-0.7C19.3,1,18.8,1,15,1z
                     M15,3.5c3.7,0,4.2,0,5.7,0.1c1.4,0.1,2.1,0.3,2.6,0.5c0.7,0.3,1.1,0.6,1.6,1c0.5,0.5,0.8,1,1,1.6c0.2,0.5,0.4,1.2,0.5,2.6
                    c0.1,1.5,0.1,1.9,0.1,5.7s0,4.2-0.1,5.7c-0.1,1.4-0.3,2.1-0.5,2.6c-0.3,0.7-0.6,1.1-1,1.6c-0.5,0.5-1,0.8-1.6,1
                    c-0.5,0.2-1.2,0.4-2.6,0.5c-1.5,0.1-1.9,0.1-5.7,0.1s-4.2,0-5.7-0.1c-1.4-0.1-2.1-0.3-2.6-0.5c-0.7-0.3-1.1-0.6-1.6-1
                    c-0.5-0.5-0.8-1-1-1.6c-0.2-0.5-0.4-1.2-0.5-2.6c-0.1-1.5-0.1-1.9-0.1-5.7s0-4.2,0.1-5.7C3.6,8,3.9,7.2,4.1,6.7
                    c0.3-0.7,0.6-1.1,1-1.6c0.5-0.5,1-0.8,1.6-1C7.2,3.9,8,3.6,9.3,3.6C10.8,3.5,11.3,3.5,15,3.5"
                      fill="#F56040"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15,19.7c-2.6,0-4.7-2.1-4.7-4.7c0-2.6,2.1-4.7,4.7-4.7c2.6,0,4.7,2.1,4.7,4.7C19.7,17.6,17.6,19.7,15,19.7z
                     M15,7.8c-4,0-7.2,3.2-7.2,7.2c0,4,3.2,7.2,7.2,7.2c4,0,7.2-3.2,7.2-7.2C22.2,11,19,7.8,15,7.8 M24.2,7.5c0,0.9-0.8,1.7-1.7,1.7
                    c-0.9,0-1.7-0.8-1.7-1.7c0-0.9,0.8-1.7,1.7-1.7C23.4,5.8,24.2,6.6,24.2,7.5"
                      fill="#F56040"
                    />
                  </g>
                </svg>
              </Box>
              <Heading as="h3" css={{ fontSize: '16px', mb: '$2', fontWeight: '600' }}>
                Instagram
              </Heading>
              <Text css={{ lineHeight: '1.5', fontWeight: '400', fontSize: '13px' }}>
                To file issues, request features, and contribute, check out our GitHub.
              </Text>
            </Box>
          </NextLink>

          {/* <!-- GITHUB ORG. --> */}
          <NextLink href="https://github.com/AtelierDesign" passHref>
            <Box
              css={{
                p: '$5',
                backgroundColor: '$transparent',
                borderRadius: '$4',
                // boxShadow: 'inset 0 0 0 1px $colors$slate5',

                '&:hover': {
                  cursor: 'pointer',
                },
              }}>
              <Box css={{ mb: '$3' }}>
                <svg width="23" height="23" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.2988 2C7.95539 2 2 7.95459 2 15.3004C2 21.1758 5.81051 26.1612 11.0955 27.9208C11.761 28.0424 12.0035 27.6316 12.0035 27.279C12.0035 26.963 11.992 26.127 11.9855 25.0174C8.28607 25.8208 7.50551 23.2342 7.50551 23.2342C6.90049 21.6976 6.02851 21.2884 6.02851 21.2884C4.82093 20.4638 6.11995 20.4802 6.11995 20.4802C7.45489 20.574 8.15705 21.851 8.15705 21.851C9.34339 23.8832 11.2703 23.2962 12.028 22.9558C12.1488 22.0968 12.4925 21.5106 12.8722 21.1782C9.91901 20.8418 6.81395 19.7012 6.81395 14.6048C6.81395 13.1523 7.33241 11.9659 8.18319 11.036C8.04603 10.6996 7.58961 9.34749 8.31383 7.51613C8.31383 7.51613 9.42993 7.15851 11.9708 8.87881C13.0314 8.58407 14.1696 8.43711 15.3004 8.43139C16.4304 8.43711 17.5678 8.58407 18.63 8.87881C21.1692 7.15851 22.2836 7.51613 22.2836 7.51613C23.0096 9.34749 22.5532 10.6996 22.4168 11.036C23.2692 11.9659 23.7836 13.1523 23.7836 14.6048C23.7836 19.7143 20.6736 20.8386 17.7115 21.1676C18.1883 21.5784 18.6137 22.39 18.6137 23.631C18.6137 25.4084 18.5973 26.843 18.5973 27.279C18.5973 27.635 18.8374 28.049 19.5118 27.919C24.7928 26.1564 28.6 21.175 28.6 15.3004C28.6 7.95459 22.6446 2 15.2988 2Z"
                    fill="#6cc644"
                  />
                </svg>
              </Box>
              <Heading as="h3" css={{ fontSize: '16px', mb: '$2', fontWeight: '600' }}>
                GitHub
              </Heading>
              <Text css={{ lineHeight: '1.5', fontWeight: '400', fontSize: '13px' }}>
                To file issues, request features, and contribute, check out our GitHub.
              </Text>
            </Box>
          </NextLink>
        </Grid>
      </Container>
    </Section>
  );
};
