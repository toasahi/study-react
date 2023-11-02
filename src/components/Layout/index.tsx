import { Header } from '@/src/components/Header';
import classes from '@/src/components/Layout/Layout.module.css'
import { FC, ReactNode } from 'react';

type Props = {
    children : ReactNode
}

const Layout:FC<Props> = (props) =>{
  return (
    <div className={classes.container}>
        <Header/>
      {props.children}
    </div>
  )
}

export default Layout