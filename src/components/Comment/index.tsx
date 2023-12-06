import { PostByCommentId } from '@/src/components/Post/PostByCommentId';
import { useComment } from '@/src/hooks';

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
            {data ? (
                <>
                    <div className="text-lg">
                        Created by {data.name} ({data.email})
                    </div>
                    <h1 className="text-3xl font-bold">{data?.body}</h1>
                    <h2 className="text-xl font-bold mt-5">元の記事</h2>
                    <div className="mt-3" />
                    <PostByCommentId id={data?.id} />
                </>
            ) : null}
        </div>
    );
};
