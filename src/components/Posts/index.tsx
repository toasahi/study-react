import { useCallback, useEffect, useReducer } from 'react';

type Posts = {
  body: string;
  id: number;
  title: string;
  userId: number;
}

type State = {data:Array<Posts>,loading:boolean,error:Error}

type Action = {type: "end" | "error"; data: Array<Posts>; error: Error; }

const initialState:State = {
  data: [],
    loading: true,
    error: {
      message: '',
      name: ''
    }
}

const reducer = (state:State ,action: Action) => {
  switch(action.type){
    case "end": {
      return {
        ...state,
        data: action.data,
        loading: false,
      }
    };
    case "error": {
      return {
        ...state,
        loading: false,
        error:action.error
      }
    }
  }
}

export const Posts = () =>{
  const [state,dispatch] = useReducer(reducer,initialState)

  const getPosts = useCallback(async ()=>{
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if(!res.ok){
        throw new Error("エラーが発生しました")
      }
      const json = await res.json() as Posts[]
      dispatch({
        type: 'end', data: json,
        error: {message:"",name:""}
      })
    } catch (error) {
        if(error instanceof Error){
          dispatch({
            type: 'error', data: [],
            error: error
          })
        }
    }
  },[])

  useEffect(()=>{
    getPosts();
  },[getPosts])

  if(state.loading){
    return <div>ローディング</div>
  }
  if(state.error.message !== ""){
    return <div>{state.error.message}</div>
  }
  if(state.data.length === 0){
    return <div>データは空です</div>
  }

  return (
    <>
      <ol>
      {state.data.map((post)=>{
        return(
          <li key={post.id}>{post.id}.:{post.title}</li>
        )
      })}
      </ol>
    </>
  )
}