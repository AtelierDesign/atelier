import Router from 'next/router'
import { useEffect } from 'react'

const Home = () => {
  useEffect(() => {
    Router.replace('/atelier')
  })

  return null
}

export default Home
