import { Inter } from 'next/font/google'
import { NextJsLogo } from '@/src/components/Logo/NextJsLogo'
import { Description } from '@/src/components/Description'
import classes from '@/src/components/Main/Main.module.css'
import { Footer } from '@/src/components/Footer'
import { Header } from '@/src/components/Header'
import { useState, useCallback } from 'react'

const inter = Inter({ subsets: ['latin'] })

type Props = {
    page:string;
}

const ITEMS = [
  {
    href : "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title : "Docs",
    description : "Find in-depth information about Next.js features and&nbsp;API."
  },
  {
    href : "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title : "Learn",
    description : "Learn about Next.js in an interactive course with&nbsp;quizzes!"
  },
  {
    href : "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title : "Templates",
    description : "Discover and deploy boilerplate example Next.js&nbsp;projects."
  },
  {
    href : "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title : "Deploy",
    description : "Instantly deploy your Next.js site to a shareable URLwith&nbsp;Vercel."
  }
]

export const Main = (props:Props) => {
    const [items,setItems] = useState(ITEMS);
  const handleReduce = useCallback(()=>{
    setItems((prevItems)=>{
      return prevItems.slice(0,prevItems.length-1)
    })
  },[])
  return (
    <main className={`${classes.main} ${inter.className}`}>
        <Header/>
        <Description page={props.page} handleReduce={handleReduce}>{items.length}</Description>
        <NextJsLogo/>
        <Footer items={items}/>
    </main>
  )
}
