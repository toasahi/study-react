import { useRouter } from 'next/router';
import useSWR from 'swr';

import { fetcher } from '@/src/utils/fetcher';

import type { Comment } from '@/src/types/comment';

export const useComment = () => {
    const router = useRouter();
    const { data, error, isLoading } = useSWR<Comment, Error>(
        router.query.id
            ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
            : null,
        fetcher
    );

    return { data, error, isLoading };
};
