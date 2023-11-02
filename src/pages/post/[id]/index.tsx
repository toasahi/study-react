import { Header } from '@/src/components/Header';
import Head from 'next/head'
import { useRouter } from 'next/router';

const PostId = () =>{
    const router = useRouter()
  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Header/>
      <div>
        {router.query.id}
      </div>
    </>
  )
}

export default PostId