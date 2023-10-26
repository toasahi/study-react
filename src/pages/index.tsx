import { Main } from '@/src/components/Main'
import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(()=> {
    document.body.style.backgroundColor="lightblue"

    return() => {
      document.body.style.backgroundColor=""
    }
  },[])
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Main page='index'/>
    </>
  )
}
