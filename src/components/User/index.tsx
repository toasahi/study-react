import { useUser } from '@/src/hooks/useUser';
import Head from 'next/head'

export const User = () =>{
  
  const { data, error,isLoading } = useUser()

  if(isLoading){
    return <div>ローディング</div>
  }
  if(error){
    return <div>{error.message}</div>
  }

  return (
    <div>
      <Head>
        <title>{data?.username}</title>
      </Head>
        <div>
            <h1>{data?.name}</h1>
            <ul>
                <li>{data?.email}</li>
                <li>{data?.username}</li>
                <li>{data?.address.city}</li>
                <li>{data?.phone}</li>
                <li>{data?.website}</li>
            </ul>
        </div>
    </div>
  )
}