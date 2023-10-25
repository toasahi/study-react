import Link from "next/link"
import classes from "@/src/components/Header/Header.module.css"

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
