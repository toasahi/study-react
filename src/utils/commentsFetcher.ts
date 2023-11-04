import { Comment } from "@/src/types/comment";

export const commentsFetcher = async (url: string): Promise<Comment[]> => {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error("正しいURLをを挺してください")
    }
    return response.json();
  };
