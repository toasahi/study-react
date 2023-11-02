import useSWR from "swr";

type Posts = {
    body: string;
    id: number;
    title: string;
    userId: number;
  }

const fetcher = async (url: string): Promise<Posts[]> => {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error("正しいURLをを挺してください")
    }
    return response.json();
  };
  
export const usePosts = () => {
    const { data, error,isLoading } = useSWR<Posts[],Error>('https://jsonplaceholder.typicode.com/posts',fetcher)
    
    return {
      data,error,isLoading : isLoading,isEmpty: data && data.length === 0
    }
  }