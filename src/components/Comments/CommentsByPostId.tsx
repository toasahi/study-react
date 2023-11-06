import { useCommentsByPostId } from '@/src/hooks/useFetchArray';
import Link from 'next/link';

type Props = {
    id: number;
};

export const CommentsByPostId = (props: Props) => {
    const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);

    if (isLoading) {
        return <div>ローディング</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }
    if (data && isEmpty) {
        return <div>データは空です</div>;
    }

    return (
        <div>
            {data?.map((comment) => {
                return (
                    <li key={comment.id}>
                        <Link href={`/comments/${comment.id}`}>
                            {comment.body}
                        </Link>
                    </li>
                );
            })}
        </div>
    );
};
