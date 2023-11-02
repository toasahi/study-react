import { User } from "@/src/types/user"

export const userFetcher = async (url:string):Promise<User> => {
    const response = await fetch(url)
    if(!response.ok){
      throw new Error("正しいURLをを挺してください")
    }
    return response.json()
  } 