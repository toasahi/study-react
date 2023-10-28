import classes from '@/src/components/Description/Description.module.css'
import { VercelLogo } from '@/src/components/Logo/VercelLogo';
import { ReactNode } from 'react';

type Props = {
    page: string;
    children:ReactNode;
    handleReduce:()=>void;
}

export function Description(props:Props) {
    const {page,children,handleReduce} = props;
    return (
        <div className={classes.description}>
            <h1>{page} Page</h1>
          <p>
            <code className={classes.code}>pages/{page}.tsx</code>
          </p>
          <p>
            <code className={classes.code}>itemは{children}個です</code>
          </p>
          <button onClick={handleReduce}>減らす</button>
          <VercelLogo/>
        </div>
)}