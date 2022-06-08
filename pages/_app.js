import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/layouts/navbar'
import Footer from '../components/layouts/footer'
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'

function MyApp({ Component, pageProps }) {
  gsap.registerPlugin(CSSPlugin)
  return (
    <>
      <Head>
        <title>Sophrologue - Alicia Gomes</title>
        <meta
          name="description"
          content="Dans ton âme - Alicia Gomes, sophrologie en Haute-Savoie Chablais"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bg-white text-dta_graydark">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
