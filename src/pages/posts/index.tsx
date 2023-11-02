import { Header } from '@/src/components/Header';
import { Posts as PostsComponent } from '@/src/components/Posts';
import Head from 'next/head'

const Posts = () =>{
  return (
    <div>
      <Head>
        <title>Index</title>
      </Head>
      <Header/>
      <PostsComponent/>
    </div>
  )
}

export default Posts