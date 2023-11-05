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
        <ul>
            <li>{data?.name}</li>
            <li>{data?.body}</li>
        </ul>
    );
};
