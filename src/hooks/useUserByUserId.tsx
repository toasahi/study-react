import useSWRImmutable from 'swr/immutable';

import type { User } from '@/src/types/user';

export const useUserByUserId = (id: number) => {
    const { data, error } = useSWRImmutable<User, Error>(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return { data, error, isLoading: !data && !error };
};
