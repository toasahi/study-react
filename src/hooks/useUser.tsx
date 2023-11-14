import { useRouter } from 'next/router';
import useSWR from 'swr';

import { fetcher } from '@/src/utils/fetcher';

import type { User } from '@/src/types/user';

export const useUser = () => {
    const router = useRouter();
    const { data, error, isLoading } = useSWR<User, Error>(
        router.query.id
            ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
            : null,
        fetcher
    );
    return { data, error, isLoading };
};
