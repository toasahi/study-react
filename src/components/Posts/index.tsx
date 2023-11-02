import { usePosts } from '@/src/hooks/usePosts';
import classes from '@/src/components/Posts/Posts.module.css'
import Link from 'next/link';

export const Posts = () =>{
  
  const { data, error,isLoading,isEmpty } = usePosts()

  if(isLoading){
    return <div>ローディング</div>
  }
  if(error){
    return <div>{error.message}</div>
  }
  if(isEmpty || data === undefined){
    return <div>データは空です</div>
  }

  return (
    <>
      <ol className={classes.posts}>
      {data.map((post)=>{
        return(
          <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
        )
      })}
      </ol>
    </>
  )
}