import { Comment } from '@/src/types/comment';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import { fetcher } from '@/src/utils/fetcher';

export const useComment = () => {
    const router = useRouter();
    const { data, error, isLoading } = useSWR<Comment, Error>(
        `https://jsonplaceholder.typicode.com/comments/${router.query.id}`,
        fetcher
    );

    return { data, error, isLoading };
};
