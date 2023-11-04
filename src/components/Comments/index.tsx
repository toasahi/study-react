import classes from '@/src/components/comments/comments.module.css'
import { useComments } from '@/src/hooks/useComments';
import Link from 'next/link';

export const Comments = () =>{
  
  const { data,error,isLoading,isEmpty } = useComments()

  if(isLoading){
    return <div>ローディング</div>
  }
  if(error){
    return <div>{error.message}</div>
  }
  if(data && isEmpty){
    return <div>データは空です</div>
  }

  return (
    <>
      <ul className={classes.data}>
      {data?.map((comment)=>{
        return(
          <li key={comment.id}><Link href={`/comments/${comment.id}`}>{comment.id}.{comment.name}</Link></li>
        )
      })}
      </ul>
    </>
  )
}