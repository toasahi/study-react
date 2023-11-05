import { Comment } from '@/src/types/comment';
import { arrayFetcher } from '@/src/utils/arrayFetcher';
import useSWR from 'swr';

export const useComments = () => {
    const { data, error, isLoading } = useSWR<Comment[], Error>(
        'https://jsonplaceholder.typicode.com/comments',
        arrayFetcher
    );
    return { data, error, isLoading, isEmpty: data && data.length === 0 };
};
