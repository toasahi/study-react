import { usePosts } from '@/src/hooks/useFetchArray';
import Link from 'next/link';

export const Posts = () => {
    const { data, error, isLoading, isEmpty } = usePosts();

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
