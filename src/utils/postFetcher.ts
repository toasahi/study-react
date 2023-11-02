import { Post } from "@/src/types/post"

export const postFetcher = async (url:string):Promise<Post> => {
    const response = await fetch(url)
    if(!response.ok){
      throw new Error("正しいURLをを挺してください")
    }
    return response.json()
  } 