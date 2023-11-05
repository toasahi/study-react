import { User } from "@/src/types/user"
import { userFetcher } from "@/src/utils/userFetcher"
import { useRouter } from "next/router"
import useSWR from "swr"

export const useUser = () => {
    const router = useRouter()

    const {data,error,isLoading} = useSWR<User,Error>(`https://jsonplaceholder.typicode.com/users/${router.query.id}`,userFetcher)

    return {data,error,isLoading}
}