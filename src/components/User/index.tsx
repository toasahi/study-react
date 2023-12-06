import Head from 'next/head';

import { PostListByUserId } from '@/src/components/Post';
import { useUser } from '@/src/hooks';

export const User = () => {
    const { data, error, isLoading } = useUser();

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
                    <Head>
                        <title>{data?.username}</title>
                    </Head>
                    <div>
                        <h1 className="text-2xl font-bold">{data?.name}</h1>
                        <h2 className="text-xl font-bold mt-5">詳細</h2>
                        <ul className="list-inside list-disc mt-2">
                            <li>アカウント名:{data?.email}</li>
                            <li>ユーザ名:{data?.username}</li>
                            <li>勤務先:{data?.address.city}</li>
                            <li>電話番号:{data?.phone}</li>
                            <li>ホームページ:{data?.website}</li>
                        </ul>
                        <h2 className="text-xl font-bold mt-5">投稿</h2>
                        <div className="mt-5" />
                        <PostListByUserId id={data.id} />
                    </div>
                </>
            ) : null}
        </div>
    );
};
