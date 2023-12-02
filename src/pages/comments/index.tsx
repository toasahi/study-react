import { GetStaticProps } from 'next';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import { Comments as CommentsComponent } from '@/src/components/Comments';
import type { Comment } from '@/src/types/comment';
import { API_URL } from '@/src/utils/const';

export const getStaticProps = (async () => {
    // ユーザー情報の取得
    const Comments_API_URL = `http://localhost:50100/comments`;
    const comments = await fetch(Comments_API_URL);
    const CommentsData: Comment[] = await comments.json();
    return {
        props: {
            fallback: {
                [Comments_API_URL]: CommentsData,
            },
        },
    };
}) satisfies GetStaticProps;

type Props = {
    fallback: {
        [key: string]: Comment[];
    };
};

const Comments = (props: Props) => {
    const { fallback } = props;
    return (
        <SWRConfig value={{ fallback }}>
            <div>
                <Head>
                    <title>Index</title>
                </Head>
                <CommentsComponent />
            </div>
        </SWRConfig>
    );
};

export default Comments;
