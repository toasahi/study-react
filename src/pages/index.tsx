import { Main } from '@/src/components/Main'
import { useBgLightBlue } from '@/src/hooks/useBgLightBlue'
import { useCounter } from '@/src/hooks/useCounter'
import { useInputArray } from '@/src/hooks/useInputArray'
import Head from 'next/head'

export default function Home() {
  const {count,isShow,handleClick,handleDisplay} = useCounter();
  const {text,array,handleAdd,handleChange} = useInputArray();  
  useBgLightBlue();
  
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
