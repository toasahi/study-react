import useSWR from 'swr';

import type { Post } from '@/src/types/post';

export const usePostByCommentId = (id: number) => {
    const { data, error } = useSWR<Post, Error>(
        id ? `https://jsonplaceholder.typicode.com/posts/${id}` : null
    );
    return {
        data,
        error,
        isLoading: !data && !error,
    };
};
