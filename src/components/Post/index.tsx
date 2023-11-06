import { CommentsByPostId } from '@/src/components/Comments/CommentsByPostId';
import { UserByUserId } from '@/src/components/User/UserByUserId';
import { usePost } from '@/src/hooks/usePost';

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
            <h1>{data?.title}</h1>
            <p>{data?.body}</p>
            {data ? (
                <>
                    <UserByUserId id={data?.userId} />
                    <CommentsByPostId id={data.id} />
                </>
            ) : null}
        </div>
    );
};
