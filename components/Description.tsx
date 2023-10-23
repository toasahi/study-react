import styles from '@/styles/Home.module.css'
import { VercelLogo } from './VercelLogo'

export function Description() {
    return (
    <>
        <div className={styles.description}>
          <p>
            <code className={styles.code}>pages/about.tsx</code>
          </p>
          <VercelLogo/>
        </div>
    </>
)}