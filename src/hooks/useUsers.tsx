import { User } from '@/src/types/user';
import { arrayFetcher } from '@/src/utils/arrayFetcher';
import useSWR from 'swr';

export const useUsers = () => {
    const { data, error, isLoading } = useSWR<User[], Error>(
        'https://jsonplaceholder.typicode.com/users',
        arrayFetcher
    );

    return { data, error, isLoading, isEmpty: data && data.length === 0 };
};
