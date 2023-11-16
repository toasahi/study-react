import { useRouter } from 'next/router';
import useSWRImmutable from 'swr/immutable';
import type { User } from '@/src/types/user';

export const useUser = () => {
    const router = useRouter();
    const { data, error } = useSWRImmutable<User, Error>(
        router.query.id
            ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
            : null
    );
    return { data, error, isLoading: !data && !error };
};
