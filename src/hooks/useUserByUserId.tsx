import { User } from '@/src/types/user';
import { fetcher } from '@/src/utils/fetcher';
import useSWR from 'swr';

export const useUserByUserId = (id:number) => {
    const { data, error, isLoading } = useSWR<User, Error>(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        fetcher
    );
    return { data, error, isLoading };
};
