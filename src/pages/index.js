import Hero from '../components/Hero'
import Info from '../components/Info'
import Legalitas from '../components/Legalitas'
import Meta from '../components/Meta'
import Order from '../components/Order'
import Profile from '../components/Profile'
import Testimoni from '../components/Testimoni'

export default function Home() {
  return (
    <>
      <Meta
        title="Keripik Dona Baturaja"
      />
      <Hero />
      <Profile />
      <Testimoni />
      <Order />
      <Legalitas />
      <Info />
    </>
  )
}