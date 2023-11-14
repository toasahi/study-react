import useSWR from 'swr';

import type { User } from '@/src/types/user';

export const useUserByUserId = (id: number) => {
    const { data, error, isLoading } = useSWR<User, Error>(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return { data, error, isLoading };
};
