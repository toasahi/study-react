import { Inter } from 'next/font/google'
import { NextJsLogo } from '@/components/NextJsLogo'
import { Description } from '@/components/Description'
import styles from '@/styles/Home.module.css'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

type Props = {
    page:string;
}

export function Main(props:Props) {
    const {page} = props;
  return (
    <main className={`${styles.main} ${inter.className}`}>
        <Description page={page}/>
        <NextJsLogo/>
        <Footer/>
    </main>
  )
}
