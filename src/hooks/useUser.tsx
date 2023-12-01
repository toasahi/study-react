import { useRouter } from 'next/router';
import useSWRImmutable from 'swr/immutable';

import { API_URL } from '@/src/utils/const';
import type { User } from '@/src/types/user';

export const useUser = () => {
    const router = useRouter();
    const { data, error } = useSWRImmutable<User, Error>(
        router.query.id ? `${API_URL}/users/${router.query.id}` : null
    );
    return { data, error, isLoading: !data && !error };
};
