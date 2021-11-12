import React from 'react'
import Image from 'next/image'
import { Box } from '@design-system/box'

export const Background = () => {
  return (
    <Box css={{ positions: 'relative', zIndex: '-1' }}>
      <Image src="/img/shape-45.png" layout="fill" objectFit="cover" />
    </Box>
  )
}
