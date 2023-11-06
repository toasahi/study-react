import { Comment } from '@/src/types/comment';
import { Post } from '@/src/types/post';
import { User } from '@/src/types/user';
import { arrayFetcher } from '@/src/utils/arrayFetcher';
import useSWR from 'swr';

const API_URL = 'https://jsonplaceholder.typicode.com'

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