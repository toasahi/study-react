import Image from 'next/image'
import classes from '@/src/components/Logo/NextJsLogo/NextJsLogo.module.css'

export const NextJsLogo= () => {
  return (
      <div className={classes.center}>
          <Image
            className={classes.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>  
  )
}
