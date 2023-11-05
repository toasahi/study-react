import { useRouter } from 'next/router';

import { Post } from '@/src/types/post';
import { User } from '@/src/types/user';
import { fetcher } from '@/src/utils/fetcher';

import useSWR from 'swr';

export const usePost = () => {
    const router = useRouter();
    const { data: post, isLoading: postIsLoading } = useSWR<Post, Error>(
        router.query.id
            ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
            : null,
        fetcher
    );

    const {
        data: user,
        error: userError,
        isLoading: userIsLoading,
    } = useSWR<User, Error>(
        post?.id
            ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
            : null,
        fetcher
    );

    return {
        post,
        user,
        error: userError,
        isLoading: postIsLoading || userIsLoading,
    };
};
