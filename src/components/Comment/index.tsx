import { PostsByCommentId } from '@/src/components/Post/PostByCommentId';
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
            <h2>元の記事</h2>
            {data ? (
                <>
                    <PostsByCommentId id={data?.id} />
                </>
            ) : null}
        </div>
    );
};
