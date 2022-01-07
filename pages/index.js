import Head from 'next/head'
import Header from '../components/Header'

export default function Home({ exploreData }) {
  return (
    <div>
      <Head>
        <title>Bundesliga</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='max-w-8xl mx-auto px-8 sm:px-16'>
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Live Matches</h2>

          {/* Pull some data from a server API */}
          {/* {exploreData.map(item => (
            <h1>{item.NameTeam1}</h1>
          ))} */}
        </section>
      </main>
    </div>
  )
}


export async function getStatisProps() {
  const exploreData = await fetch('http://www.openligadb.de/Webservices/Sportsdata.asmx?op=GetMatchByMatchID').then(res => res.json()
  );

  return {
    props: {
      exploreData: exploreData
    }
  }
}