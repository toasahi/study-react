import { usePostByCommentId } from '@/src/hooks/usePostByCommentId';

type Props = {
    id: number;
};

export const PostsByCommentId = (props: Props) => {
    const { data, error, isLoading } = usePostByCommentId(props);

    if (isLoading) {
        return <div>ローディング</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    return <div>{data?.body}</div>;
};
