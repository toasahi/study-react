import { Header } from '@/src/components/Header';
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react';

type Posts = {
  body: string;
  id: number;
title: string;
userId: number;
}

const Home = () =>{
  const [posts,setPosts] = useState<Array<Posts>>([]);

  const getPosts = useCallback(async ()=>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json()
    setPosts(()=>{
      return [,...json]
    })
  },[])

  useEffect(()=>{
    getPosts();
  },[getPosts])

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Header/>

      {posts.length > 0 ? <ol>
      {posts.map((post)=>{
        return(
          <li key={post.id}>{post.id}.:{post.title}</li>
        )
      })}
      </ol> : null
      }
    </>
  )
}

export default Home