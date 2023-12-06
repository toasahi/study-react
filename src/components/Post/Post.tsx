import { CommentsByPostId } from '@/src/components/Comments/CommentsByPostId';
import { UserByUserId } from '@/src/components/User/UserByUserId';
import { usePost } from '@/src/hooks';

import Head from 'next/head';

export const Post = () => {
    const { data, error, isLoading } = usePost();

    if (isLoading) {
        return <div>ローディング</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div>
            <Head>
                <title>{data?.title}</title>
            </Head>
            {data ? (
                <>
                    <UserByUserId id={data?.userId} />
                    <h1 className="text-xl font-bold">{data?.title}</h1>
                    <p className="text-gray-800">{data?.body}</p>
                    <h2 className="text-lg font-bold mt-4">コメント一覧</h2>
                    <div className="mt-2"></div>
                    <CommentsByPostId id={data.id} />
                </>
            ) : null}
        </div>
    );
};
