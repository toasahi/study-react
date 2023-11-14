import useSWR from 'swr';

import type { User } from '@/src/types/user';
import { fetcher } from '@/src/utils/fetcher';

export const useUserByUserId = (id: number) => {
    const { data, error, isLoading } = useSWR<User, Error>(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        fetcher
    );
    return { data, error, isLoading };
};
