import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mindcoach</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Mindcoach!" />
        <p className="description">
            A better way to maintain your cognitive performance on later years. 
        </p>

        <img src="img/qr" alt="QR code" />

      </main>

      <Footer />
    </div>
  )
}
