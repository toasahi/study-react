import { User } from '@/src/types/user';
import { fetcher } from '@/src/utils/fetcher';
import useSWR from 'swr';

type Props = {
    id: number;
};

export const useUserByUserId = (props: Props) => {
    const { data, error, isLoading } = useSWR<User, Error>(
        `https://jsonplaceholder.typicode.com/users/${props.id}`,
        fetcher
    );
    return { data, error, isLoading };
};
