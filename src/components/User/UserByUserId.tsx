import { useUserByUserId } from '@/src/hooks/useUserByUserId';

type Props = {
    id: number;
};

export const UserByUserId = (props: Props) => {
    const { data, error, isLoading } = useUserByUserId(props);

    if (isLoading) {
        return <div>ローディング</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    return <div>{data?.name ? <div>Created by {data?.name}</div> : null}</div>;
};
