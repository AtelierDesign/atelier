import { Box } from '@design-system/box'
import { Navbar } from '@components/Navbar'
import { Hero } from '@components/Hero'
import { OneCol } from '@components/OneCol'
import { Separator } from '@design-system/separator'
import { Container } from '@design-system/container'
import { Footer } from '@components/Footer'
import React from 'react'

const Resources = () => {
  return (
    <Box css={{ bc: '$slate1' }}>
      <Navbar />
      <Hero />
      <Container size="1">
        <Separator size="2" />
      </Container>
      <OneCol />
      <Footer />
    </Box>
  )
}

export default Resources
