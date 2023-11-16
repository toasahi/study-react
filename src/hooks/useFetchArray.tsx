import useSWRImmutable from 'swr/immutable';

import type { Comment } from '@/src/types/comment';
import type { Post } from '@/src/types/post';
import type { User } from '@/src/types/user';

const API_URL = 'https://jsonplaceholder.typicode.com';


export const useComments = () => {
    const { data, error} = useSWRImmutable<Comment[], Error>(
        `${API_URL}/comments`
    );
    return { data, error, isLoading: !data && !error, isEmpty: data && data.length === 0 };
};

export const usePosts = () => {
    const { data, error} = useSWRImmutable<Post[], Error>(
        `${API_URL}/posts`
    );

    return { data, error, isLoading: !data && !error, isEmpty: data && data.length === 0 };
};

export const useUsers = () => {
    const { data, error} = useSWRImmutable<User[], Error>(
        `${API_URL}/users`
    );

    return { data, error, isLoading: !data && !error, isEmpty: data && data.length === 0 };
};

export const useCommentsByPostId = (id: number) => {
    const { data, error} = useSWRImmutable<Comment[], Error>(
        `${API_URL}/comments?postId=${id}`
    );

    return { data, error, isLoading: !data && !error, isEmpty: data && data.length === 0 };
};

export const usePostsByUserId = (id: number) => {
    const { data, error} = useSWRImmutable<Post[], Error>(
        `${API_URL}/posts?userId=${id}`
    );

    return { data, error, isLoading: !data && !error, isEmpty: data && data.length === 0 };
};
