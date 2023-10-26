import { Main } from '@/src/components/Main'
import Head from 'next/head'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count,setCount] = useState(1)
  const [text,setText] = useState('')
  const [isShow,setIsShow] = useState(true);
  const handleClick = useCallback(() => {
    if(count < 10){
      setCount(count => count+1)
    } 
  },[count])
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    if(text.length > 5 ){
      alert("5文字以下にしてください")
      return;
    }
      setText(e.target.value)
  }

  const handleDisplay = useCallback(()=>{
    setIsShow((isShow)=>!isShow)
  },[])

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
      {isShow ? <h2>{count}</h2> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{!isShow ? '表示' : '非表示'}</button>
      <input type='text' value={text} onChange={handleChange}/>
      <Main page='index'/>
    </>
  )
}
