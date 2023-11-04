import {Comment} from "@/src/types/comment"
import { commentsFetcher } from "@/src/utils/commentsFetcher"
import useSWR from "swr"

export const useComments = () => {
    const {data,error,isLoading} = useSWR<Comment[],Error>(`https://jsonplaceholder.typicode.com/comments`,commentsFetcher)

    return {data,error,isLoading,isEmpty: data && data.length === 0}
}