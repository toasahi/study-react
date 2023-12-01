import { useRouter } from 'next/router';
import useSWR from 'swr';

import type { Post } from '@/src/types/post';
import { API_URL } from '@/src/utils/const';

export const usePost = () => {
    const router = useRouter();
    const { data, error } = useSWR<Post, Error>(
        router.query.id ? `${API_URL}/posts/${router.query.id}` : null
    );
    return {
        data,
        error,
        isLoading: !data && !error,
    };
};
