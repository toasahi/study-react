import { useRouter } from 'next/router';

import { Post } from '@/src/types/post';
import { fetcher } from '@/src/utils/fetcher';

import useSWR from 'swr';

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
