import Head from 'next/head'
import { Main } from '@/src/components/Main'
import { useBgColor } from '@/src/hooks/useBgColor';
import { Props } from '@/src/types/pages';
import { Header } from '@/src/components/Header';

const About = (props:Props)=> {
  useBgColor();
  
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      {props.isShow ? <h2>{props.count}</h2> : null}
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
      <Main page='about'/>
    </>
  )
}

export default About