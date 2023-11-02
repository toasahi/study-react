import { Post } from "@/src/types/post"
import { User } from "@/src/types/user"
import { postFetcher } from "@/src/utils/postFetcher"
import { userFetcher } from "@/src/utils/userFetcher"
import { useRouter } from "next/router"
import useSWR from "swr"

export const usePost = () => {
    const router = useRouter()
    const {data:post,isLoading:postIsLoading} = useSWR<Post,Error>(router.query.id ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}` : null,postFetcher)

    const {data:user,error:userError,isLoading:userIsLoading} = useSWR<User,Error>(post?.id ? `https://jsonplaceholder.typicode.com/users/${router.query.id}` : null,userFetcher)

    return {post,user,error:userError,isLoading:postIsLoading || userIsLoading}
}