import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Box } from '@atelier/box';
import { Container } from '@atelier/container';
import { Section } from '@atelier/section';
import { Flex } from '@atelier/flex';

// import { Cross1Icon, PlusIcon, BackpackIcon, ArchiveIcon, StarFilledIcon, StarIcon } from '@radix-ui/react-icons';

const Interval = props => {
  return (
    <Box>
      <Section size="2">
        <Container size="3">
          <Flex css={{ '@bp2': { gap: '$7' } }}>
            <Flex css={{ fd: 'column', gap: '$3', width: 45, fs: 0 }}>
              <Image src="https://cdn.ady.systems/ady.images/btrfly.png" alt="One" width={100} height={100} />
              <Image src="https://cdn.ady.systems/ady.images/btrfly.png" alt="One" width={100} height={100} />
              <Image src="https://cdn.ady.systems/ady.images/btrfly.png" alt="One" width={100} height={100} />
              <Image src="https://cdn.ady.systems/ady.images/btrfly.png" alt="One" width={100} height={100} />
            </Flex>
          </Flex>
        </Container>
      </Section>
    </Box>
  );
};

export default Interval;
