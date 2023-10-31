import { Header } from '@/src/components/Header';
import { Posts } from '@/src/components/Posts';
import Head from 'next/head'

const Home = () =>{
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Header/>
      <Posts/>
    </>
  )
}

export default Home