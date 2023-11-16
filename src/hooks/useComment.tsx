import { useRouter } from 'next/router';
import useSWR from 'swr';

import type { Comment } from '@/src/types/comment';

export const useComment = () => {
    const router = useRouter();
    const { data, error } = useSWR<Comment, Error>(
        router.query.id
            ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
            : null
    );

    return { data, error, isLoading: !data && !error };
};
