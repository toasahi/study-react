import { Post } from '@/src/types/post';
import { fetcher } from '@/src/utils/fetcher';

import useSWR from 'swr';

export const usePostByCommentId = (id: number) => {
    const { data, error, isLoading } = useSWR<Post, Error>(
        id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null,
        fetcher
    );
    return {
        data,
        error,
        isLoading,
    };
};
