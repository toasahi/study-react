import Link from 'next/link';

import { usePostsByUserId } from '@/src/hooks/useFetchArray';

type Props = {
    id: number;
};

export const PostsByUserId = (props: Props) => {
    const { data, error, isLoading } = usePostsByUserId(props.id);

    if (isLoading) {
        return <div>ローディング</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
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
