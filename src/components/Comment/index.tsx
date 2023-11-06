import { useComment } from '@/src/hooks/useComment';

export const Comment = () => {
    const { data, error, isLoading } = useComment();

    if (isLoading) {
        return <div>ローディング</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <h2>{data?.body}</h2>
        <ul>
            <li>{data?.name}</li>
            <li>{data?.email}</li>
        </ul>
        </div>
    );
};
