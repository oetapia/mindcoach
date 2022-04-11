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

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf1ooPNezRnLQveKKjUh6mPf8R1ZG1ryeO7BuQ_sKbnP20OVQ/viewform?embedded=true" width="640" height="704" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

      </main>


      <Footer />
    </div>
  )
}
