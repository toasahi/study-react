import { Post } from '@/src/types/post';
import { fetcher } from '@/src/utils/fetcher';

import useSWR from 'swr';

type Props = {
    id: number;
};

export const usePostByCommentId = (props: Props) => {
    const { data, error, isLoading } = useSWR<Post, Error>(
        props.id
            ? `https://jsonplaceholder.typicode.com/posts/${props.id}`
            : null,
        fetcher
    );
    return {
        data,
        error,
        isLoading,
    };
};
