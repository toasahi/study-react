import { Post } from "@/src/types/post";
import { postsFetcher } from "@/src/utils/postsFetcher";
import useSWR from "swr";

export const usePosts = () => {
    const { data, error,isLoading } = useSWR<Post[],Error>('https://jsonplaceholder.typicode.com/posts',postsFetcher)
    
    return {
      data,error,isLoading : isLoading,isEmpty: data && data.length === 0
    }
  }