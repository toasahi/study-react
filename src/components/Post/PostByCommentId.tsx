import Link from 'next/link';

import { usePostByCommentId } from '@/src/hooks';

type Props = {
    id: number;
};

export const PostByCommentId = (props: Props) => {
    const { data, error, isLoading } = usePostByCommentId(props.id);

    if (isLoading) {
        return <div>ローディング</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <Link
            href={`/posts/${data?.id}`}
            className="text-lg hover:text-blue-500"
        >
            {data?.title}
        </Link>
    );
};
