import useSWR from 'swr';

import type { Post } from '@/src/types/post';
import { API_URL } from '@/src/utils/const';
import useSWRImmutable from 'swr/immutable';

export const usePostByCommentId = (id: number) => {
    const { data, error } = useSWRImmutable<Post, Error>(
        id ? `${API_URL}/posts/${id}` : null
    );
    return {
        data,
        error,
        isLoading: !data && !error,
    };
};
