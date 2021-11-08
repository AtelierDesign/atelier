import Image from 'next/image'
import Head from 'next/head'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Section from '../components/section'
import Cta from '../components/cta'

export default function Information() {
  return (
    <>
      <Head>
        <title>Information.</title>
      </Head>
      <Navbar />
      <Hero>
        <h4>Atelier Design Yield®</h4>
      </Hero>
      <div className="spa__cer"></div>
    </>
  )
}
