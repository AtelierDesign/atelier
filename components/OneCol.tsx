import { Box } from '@design-system/box'
import { Container } from '@design-system/container'
import { Grid } from '@design-system/grid'
import { Text } from '@design-system/text'
import { Button } from '@design-system/button'
import Image from 'next/image'
import React from 'react'

export const OneCol = () => {
  return (
    <Box>
      <Container size="3" css={{ my: '40px', px: '18px' }}>
        <Grid
          css={{
            gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
            gap: '$2',
            bc: '$slate2',
            backdropFilter: 'blur(10px)',
            saturate: '200%',
            br: '26px',
            px: '30px',
            zIndex: '20',
            boxShadow: 'inset 0 0 0 1px $colors$slate7',
          }}>
          <Box css={{ height: '400px', position: 'relative' }}>
            <Text
              as="p"
              size="5"
              css={{
                fontWeight: '800',
                paddingTop: '35px',
                lineHeight: '10px',
                zIndex: '80',
              }}>
              ADY® INTERVAL
            </Text>
            <Text
              as="p"
              size="3"
              css={{
                fontWeight: '400',
                paddingTop: '16px',
                lineHeight: '22px',
                zIndex: '80',
                width: '400px',
                color: '$slate9',
              }}>
              ADY® is an ever– expanding ecosystem of essential design
              components built for modern web.
            </Text>

            <Button
              size="2"
              variant="gray"
              css={{ marginTop: '20px', zIndex: '25' }}>
              Base Button
            </Button>
            <Image
              src="/img/shape-17.png"
              layout="fill"
              objectFit="cover"
              alt="image"
            />
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
