import Head from 'next/head'
import '../styles/globals.css'
import Navbar from '../components/layouts/navbar'
import Footer from '../components/layouts/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dans ton âme</title>
        <meta
          name="description"
          content="Dans ton âme, sophrologie en Haute Savoie"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="bg-dta_graylight">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
