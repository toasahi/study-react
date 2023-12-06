import { useRouter } from 'next/router';
import useSWRImmutable from 'swr/immutable';

import type { Comment } from '@/src/types/comment';
import { API_URL } from '@/src/utils/const';

export const useComment = () => {
    const router = useRouter();
    const { data, error } = useSWRImmutable<Comment, Error>(
        router.query.id ? `${API_URL}/comments/${router.query.id}` : null
    );

    return { data, error, isLoading: !data && !error };
};
