import { usePosts } from '@/src/hooks/usePosts';

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
      <ol>
      {data.map((post)=>{
        return(
          <li key={post.id}>{post.id}.:{post.title}</li>
        )
      })}
      </ol>
    </>
  )
}