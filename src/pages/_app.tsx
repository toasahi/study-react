import '@/src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { useInputArray } from '@/src/hooks/useInputArray';
import { useCounter } from '@/src/hooks/useCounter';

const App = ({ Component, pageProps }: AppProps) =>{
  const counter = useCounter()
  const inputArray = useInputArray()
  return (
  <>
    <Head>
        <title>Index</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} {...counter} {...inputArray} />
  </>)
}

export default App