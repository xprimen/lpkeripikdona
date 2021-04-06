import '../styles/globals.css'
import '../styles/style.scss'
import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import FacebookPixel from '../components/FacebookPixel'

function MyApp({ Component, pageProps }) {
  return <Layout><FacebookPixel><Component {...pageProps} /></FacebookPixel></Layout>
}

export default MyApp
