import { Header } from '@/src/components/Header';
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react';

type Posts = {
  body: string;
  id: number;
title: string;
userId: number;
}

export const Posts = () =>{
  const [posts,setPosts] = useState<Array<Posts>>([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState<Error>();

  const getPosts = useCallback(async ()=>{
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if(!res.ok){
        throw new Error("エラーが発生しました")
      }
      const json = await res.json()
      setPosts(()=>{
        return [...json]
      })
    } catch (e) {
        if(e instanceof Error){
          setError(e);
        }
    }finally{
      setLoading(false)
    }
  },[])

  useEffect(()=>{
    getPosts();
  },[getPosts])

  if(loading){
    return <div>ローディング</div>
  }
  if(error){
    return (
        <div>{error.message}</div>
    )
  }
  if(posts.length === 0){
    return <div>データは空です</div>
  }

  return (
    <>
      <ol>
      {posts.map((post)=>{
        return(
          <li key={post.id}>{post.id}.:{post.title}</li>
        )
      })}
      </ol>
    </>
  )
}