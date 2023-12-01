import Link from 'next/link';

import { useComments } from '@/src/hooks/useFetchArray';

export const Comments = () => {
    const { data, error, isLoading, isEmpty } = useComments();

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
        <ul className="space-y-4">
            {data?.map((comment) => {
                return (
                    <li key={comment.id} className="border-b pb-2">
                        <Link href={`/comments/${comment.id}`} prefetch={false}>
                            <h1 className="hover:text-blue-500">
                                {comment.body}
                            </h1>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
