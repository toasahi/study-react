
import { Card } from '@/src/components/Card/Card'
import classes from '@/src/components/Footer/Footer.module.css'
import { useCallback, useState } from 'react'

type Item = {
  href : string;
  title : string;
  description : string;
}

type Props = {
  items: Item[];
}

export function Footer({items}:Props) {
  return (
        <footer className={classes.grid}>
          {items.map((item)=>(
            <Card key={item.href} href={item.href} title={item.title} description={item.description}></Card>
          ))}
        </footer>
  )
}
