import {Comment} from "@/src/types/comment"
import { commentsFetcher } from "@/src/utils/commentsFetcher"
import useSWR from "swr"
import { useRouter } from "next/router"

export const useComment = () => {
    const router = useRouter();
    const {data:comments} = useSWR<Comment[],Error>(`https://jsonplaceholder.typicode.com/comments`,commentsFetcher)
    const {data,error,isLoading} = useSWR<Comment[],Error>(`https://jsonplaceholder.typicode.com/comments?postId=${comments &&  router.query.id && comments[Number(router.query.id)].postId}`,commentsFetcher)

    return {data,error,isLoading}
}