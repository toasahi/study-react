import styles from '@/styles/Home.module.css'
import { VercelLogo } from './VercelLogo'

type Props = {
    page: string;
}

export function Description(props:Props) {
    const {page} = props;
    return (
        <div className={styles.description}>
            <h1>{page} Page</h1>
          <p>
            <code className={styles.code}>pages/{page}.tsx</code>
          </p>
          <VercelLogo/>
        </div>
)}