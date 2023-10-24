import { Inter } from 'next/font/google'
import { NextJsLogo } from '@/src/components/NextJsLogo'
import { Description } from '@/src/components/Description'
import classes from '@/src/components/Main.module.css'
import { Footer } from '@/src/components/Footer'
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
