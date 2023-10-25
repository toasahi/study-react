import { Main } from '@/src/components/Main'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Main page='index'/>
    </>
  )
}
