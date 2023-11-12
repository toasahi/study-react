import useSWR from 'swr';
import { useRouter } from 'next/router';

import { fetcher } from '@/src/utils/fetcher';
import type { Post } from '@/src/types/post';

export const usePost = () => {
    const router = useRouter();
    const { data, error, isLoading } = useSWR<Post, Error>(
        router.query.id
            ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
            : null,
        fetcher
    );
    return {
        data,
        error,
        isLoading,
    };
};
