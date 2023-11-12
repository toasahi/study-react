import { useUserByUserId } from '@/src/hooks/useUserByUserId';

type Props = {
    id: number;
};

export const UserByUserId = (props: Props) => {
    const { data, error, isLoading } = useUserByUserId(props.id);

    if (isLoading) {
        return <div>ローディング</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div className="text-lg">
            {data?.name ? <>Created by {data?.name}</> : null}
        </div>
    );
};
