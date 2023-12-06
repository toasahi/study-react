import Link from 'next/link';

import { usePostListByUserId } from '@/src/hooks';

type Props = {
    id: number;
};

export const PostListByUserId = (props: Props) => {
    const { data, error,isEmpty } = usePostListByUserId(props.id);

    if (error) {
        return <div>{error.message}</div>;
    }
    if (isEmpty) {
        return <div>データは空です</div>;
    }

    return (
        <ul className="space-y-4">
            {data?.map((post) => {
                return (
                    <li key={post.id}>
                        <Link href={`/posts/${post.id}`} className="group">
                            <h1 className="font-bold group-hover:text-blue-500">
                                {post.title}
                            </h1>
                            <p className="test-sm text-gray-500 group-hover:text-blue-500">
                                {post.body}
                            </p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};
