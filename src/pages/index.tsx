import { Main } from '@/src/components/Main'
import Head from 'next/head'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'

export default function Home() {
  const [count,setCount] = useState(1)
  const [text,setText] = useState('')
  const [isShow,setIsShow] = useState(true);
  const [array,setArray] = useState<Array<string>>([]);

  const handleClick = useCallback(() => {
    if(count < 10){
      setCount(prevCount => prevCount+1)
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
    setIsShow((prevIsShow)=>!prevIsShow)
  },[])

  useEffect(()=> {
    document.body.style.backgroundColor="lightblue"

    return() => {
      document.body.style.backgroundColor=""
    }
  },[])

  const handleAdd = useCallback(()=>{
    setArray((prevArray)=>{
      if(prevArray.some((item)=>item==text)){
        alert('すでに存在します')
        return prevArray
      }
      return [...prevArray,text]
    })
  },[text])


  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      {isShow ? <h2>{count}</h2> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{!isShow ? '表示' : '非表示'}</button>
      <button onClick={handleAdd}>値の追加</button>
      <input type='text' value={text} onChange={handleChange}/>
      <ul>
        {array.map(item=>{
          return(
            <li key={item}>{item}</li>
          )
        })}
      </ul>
      <Main page='index'/>
    </>
  )
}
