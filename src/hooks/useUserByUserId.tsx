import useSWRImmutable from 'swr/immutable';

import type { User } from '@/src/types/user';
import { API_URL } from '@/src/utils/const';

export const useUserByUserId = (id: number) => {
    const { data, error } = useSWRImmutable<User, Error>(
        `${API_URL}/users/${id}`
    );
    return { data, error, isLoading: !data && !error };
};
