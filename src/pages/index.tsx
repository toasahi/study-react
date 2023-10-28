import { Main } from '@/src/components/Main'
import { useBgColor } from '@/src/hooks/useBgColor'
import { Props } from '@/src/types/pages';
import Head from 'next/head'

export default function Home(props:Props) {
  useBgColor();
  
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>

      {props.isShow ? <h2>{props.doubleCount}</h2> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{!props.isShow ? '表示' : '非表示'}</button>

      <button onClick={props.handleAdd}>値の追加</button>
      <input type='text' value={props.text} onChange={props.handleChange}/>
      <ul>
        {props.array.map(item=>{
          return(
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page='index'/>
    </>
  )
}
