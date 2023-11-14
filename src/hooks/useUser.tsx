import { useRouter } from 'next/router';
import useSWR from 'swr';

import type { User } from '@/src/types/user';

export const useUser = () => {
    const router = useRouter();
    const { data, error, isLoading } = useSWR<User, Error>(
        router.query.id
            ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
            : null
    );
    return { data, error, isLoading };
};
