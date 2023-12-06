import { useRouter } from 'next/router';
import useSWR from 'swr';

import type { Post } from '@/src/types/post';
import { API_URL } from '@/src/utils/const';
import useSWRImmutable from 'swr/immutable';

export const usePost = () => {
    const router = useRouter();
    const { data, error } = useSWRImmutable<Post, Error>(
        router.query.id ? `${API_URL}/posts/${router.query.id}` : null
    );
    return {
        data,
        error,
        isLoading: !data && !error,
    };
};
