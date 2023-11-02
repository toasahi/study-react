import { Header } from '@/src/components/Header';
import { Posts } from '@/src/components/Posts';
import Head from 'next/head'

const Home = () =>{
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <Header/>
      <Posts/>
    </div>
  )
}

export default Home