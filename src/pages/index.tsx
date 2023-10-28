import { Main } from '@/src/components/Main'
import { useBgLightBlue } from '@/src/hooks/useBgLightBlue'
import Head from 'next/head'
import { ChangeEvent } from 'react'

type Props = {
  count:number;
  isShow:boolean;
  handleClick:()=>void;
  handleDisplay:()=>void;
  text:string;
  array:string[];
  handleAdd:()=>void;
  handleChange:(e: ChangeEvent<HTMLInputElement>) => void
}

export default function Home({count,isShow,handleClick,handleDisplay,text,array,handleAdd,handleChange}:Props) {
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
