import useSWR from 'swr';

import { arrayFetcher } from '@/src/utils/arrayFetcher';

import type { Comment } from '@/src/types/comment';
import type { Post } from '@/src/types/post';
import type { User } from '@/src/types/user';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const useComments = () => {
    const { data, error, isLoading } = useSWR<Comment[], Error>(
        `${API_URL}/comments`,
        arrayFetcher
    );
    return { data, error, isLoading, isEmpty: data && data.length === 0 };
};

export const usePosts = () => {
    const { data, error, isLoading } = useSWR<Post[], Error>(
        `${API_URL}/posts`,
        arrayFetcher
    );

    return { data, error, isLoading, isEmpty: data && data.length === 0 };
};

export const useUsers = () => {
    const { data, error, isLoading } = useSWR<User[], Error>(
        `${API_URL}/users`,
        arrayFetcher
    );

    return { data, error, isLoading, isEmpty: data && data.length === 0 };
};

export const useCommentsByPostId = (id: number) => {
    const { data, error, isLoading } = useSWR<Comment[], Error>(
        `${API_URL}/comments?postId=${id}`,
        arrayFetcher
    );

    return { data, error, isLoading, isEmpty: data && data.length === 0 };
};

export const usePostsByUserId = (id: number) => {
    const { data, error, isLoading } = useSWR<Post[], Error>(
        `${API_URL}/posts?userId=${id}`,
        arrayFetcher
    );

    return { data, error, isLoading, isEmpty: data && data.length === 0 };
};
