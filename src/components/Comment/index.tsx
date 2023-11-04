import { useComment } from '@/src/hooks/useComment';

export const Comment = () =>{
  const {data,error,isLoading} = useComment()

  if(isLoading){
    return <div>ローディング</div>
  }
  if(error){
    return <div>{error.message}</div>
  }

  return (
    <ul>
    {data?.map((comment)=>{
      return(
        <li key={comment.id}>{comment.body}</li>
      )
    })}
    </ul>
  )
}