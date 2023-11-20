import { useRouter } from 'next/router';
import useSWR from 'swr';

import type { Post } from '@/src/types/post';

export const usePost = () => {
    const router = useRouter();
    const { data, error } = useSWR<Post, Error>(
        router.query.id
            ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
            : null
    );
    return {
        data,
        error,
        isLoading: !data && !error,
    };
};
