import Link from "next/link"
import classes from "@/components/Header.module.css"

export function Header() {
  return (
        <header className={classes.header}>
            <Link className={classes.anchor} href='/'>
                index
            </Link>
            <Link className={classes.anchor} href='/about'>
                about
            </Link>
        </header>
  )
}
