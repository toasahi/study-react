import classes from '@/components/Description.module.css'
import { VercelLogo } from './VercelLogo'

type Props = {
    page: string;
}

export function Description(props:Props) {
    const {page} = props;
    return (
        <div className={classes.description}>
            <h1>{page} Page</h1>
          <p>
            <code className={classes.code}>pages/{page}.tsx</code>
          </p>
          <VercelLogo/>
        </div>
)}