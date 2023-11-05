import { Post } from '@/src/types/post';
import { arrayFetcher } from '@/src/utils/arrayFetcher';
import useSWR from 'swr';

export const usePosts = () => {
    const { data, error, isLoading } = useSWR<Post[], Error>(
        'https://jsonplaceholder.typicode.com/posts',
        arrayFetcher
    );

    return { data, error, isLoading, isEmpty: data && data.length === 0 };
};
