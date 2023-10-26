import { Main } from '@/src/components/Main'
import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [count,setCount] = useState(0)
  const handleClick = () => {
      setCount(count => count+1)
      setCount(count => count+1)
  }
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
      <h2>{count}</h2>
      <button onClick={handleClick}>ボタン</button>
      <Main page='index'/>
    </>
  )
}
