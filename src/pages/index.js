import Head from 'next/head'
import Hero from '../components/Hero'
import Profile from '../components/Profile'
import Testimoni from '../components/Testimoni'
import Order from '../components/Order'
import Legalitas from '../components/Legalitas'
import Info from '../components/Info'

export default function Home() {
  return (
    <>
      <Head>
        <title>Keripik Dona Baturaja</title>
      </Head>
      <Hero />
      <Profile />
      <Testimoni />
      <Order />
      <Legalitas />
      <Info />
    </>
  )
}