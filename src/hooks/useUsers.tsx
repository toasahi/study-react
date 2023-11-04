
import { User } from "@/src/types/user"
import { usersFetcher } from "@/src/utils/usersFetcher"
import useSWR from "swr"

export const useUsers = () => {
    const {data:users,error:userError,isLoading} = useSWR<User[],Error>(`https://jsonplaceholder.typicode.com/users`,usersFetcher)

    return {users,isLoading,userError ,isEmpty: users && users.length === 0}
}