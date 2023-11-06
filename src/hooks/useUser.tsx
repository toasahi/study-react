import { User } from '@/src/types/user';
import { fetcher } from '@/src/utils/fetcher';
import { useRouter } from 'next/router';
import useSWR from 'swr';

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
