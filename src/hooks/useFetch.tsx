import { useRouter } from 'next/router';
import useSWRImmutable from 'swr/immutable';

import { API_URL } from '@/src/utils/const';

import type { Comment } from '@/src/types/comment';
import type { Post } from '@/src/types/post';
import type { User } from '@/src/types/user';

export const useComment = () => {
    const router = useRouter();
    const { data, error } = useSWRImmutable<Comment, Error>(
        router.query.id ? `${API_URL}/comments/${router.query.id}` : null
    );

    return { data, error, isLoading: !data && !error };
};

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

export const useUser = () => {
    const router = useRouter();
    const { data, error } = useSWRImmutable<User, Error>(
        router.query.id ? `${API_URL}/users/${router.query.id}` : null
    );
    return { data, error, isLoading: !data && !error };
};

export const useUserByUserId = (id: number) => {
    const { data, error } = useSWRImmutable<User, Error>(
        `${API_URL}/users/${id}`
    );
    return { data, error, isLoading: !data && !error };
};

export const usePostByCommentId = (id: number) => {
    const { data, error } = useSWRImmutable<Post, Error>(
        id ? `${API_URL}/posts/${id}` : null
    );
    return {
        data,
        error,
        isLoading: !data && !error,
    };
};