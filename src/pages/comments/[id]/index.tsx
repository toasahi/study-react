import Head from 'next/head';

import { Comment as CommentComponent } from '@/src/components/Comment';
import { GetServerSideProps } from 'next';
import { SWRConfig } from 'swr';

export const getStaticProps = (async () => {
    // ユーザー情報の取得
    const COMMENT_API_URL = `https://jsonplaceholder.typicode.com/comment`;
    const comment = await fetch(COMMENT_API_URL);
    const commentData: Comment[] = await comment.json();
    return {
        props: {
            fallback: {
                [COMMENT_API_URL]: commentData,
            },
        },
    };
}) satisfies GetServerSideProps;

type Props = {
    fallback: {
        [key: string]: Comment[];
    };
};

const Comment = (props: Props) => {
    const { fallback } = props;
    return (
        <div>
            <Head>
                <title>Index</title>
            </Head>
            <SWRConfig value={{ fallback }}>
                <CommentComponent />
            </SWRConfig>
        </div>
    );
};

export default Comment;
