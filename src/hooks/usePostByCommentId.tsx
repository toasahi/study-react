import useSWR from 'swr';

import { fetcher } from '@/src/utils/fetcher';

import type { Post } from '@/src/types/post';

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
