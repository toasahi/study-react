import useSWR from 'swr';

import { fetcher } from '@/src/utils/fetcher';
import type { User } from '@/src/types/user';

export const useUserByUserId = (id: number) => {
    const { data, error, isLoading } = useSWR<User, Error>(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        fetcher
    );
    return { data, error, isLoading };
};
