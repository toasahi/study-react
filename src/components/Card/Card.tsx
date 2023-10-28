
import classes from '@/src/components/Card/Card.module.css'
type Props = {
    href: string;
    title:string;
    description:string;
}

export const Card = (props:Props)=>{
    const { href,title,description} = props
  return (
          <a
            href={href}
            className={classes.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              {title} <span>-&gt;</span>
            </h2>
            <p>
              {description}
            </p>
          </a>
  )
}
