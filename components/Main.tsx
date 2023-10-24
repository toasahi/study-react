import { Inter } from 'next/font/google'
import { NextJsLogo } from '@/components/NextJsLogo'
import { Description } from '@/components/Description'
import classes from '@/components/Main.module.css'
import { Footer } from '@/components/Footer'
import { Header } from './Header'

const inter = Inter({ subsets: ['latin'] })

type Props = {
    page:string;
}

export function Main(props:Props) {
    const {page} = props;
  return (
    <main className={`${classes.main} ${inter.className}`}>
        <Header/>
        <Description page={page}/>
        <NextJsLogo/>
        <Footer/>
    </main>
  )
}
