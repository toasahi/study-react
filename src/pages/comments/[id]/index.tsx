import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import { Comment as CommentComponent } from '@/src/components/Comment';
import { Comment as CommentType } from '@/src/types/comment';
import { API_URL } from '@/src/utils/const';

export const getStaticPaths = (async () => {
    const Comments_API_URL = `http://localhost:50100/comments?_limit=10`;
    const comments = await fetch(Comments_API_URL);
    const commentsData: CommentType[] = await comments.json();
    const paths = commentsData.map((comment) => ({
        params: { id: comment.id.toString() },
    }));
    return {
        paths,
        fallback: 'blocking',
    };
}) satisfies GetStaticPaths;

export const getStaticProps: GetStaticProps = (async (context) => {
    if (!context.params) {
        throw new Error('Missing context params');
    }
    const { id } = context.params;
    // ユーザー情報の取得
    const COMMENT_API_URL = `http://localhost:50100/comments/${id}`;
    const comment = await fetch(COMMENT_API_URL);
    if (!comment.ok) {
        return {
            notFound: true,
            revalidate: 1,
        };
    }
    const commentData: CommentType[] = await comment.json();
    return {
        props: {
            fallback: {
                [COMMENT_API_URL]: commentData,
            },
        },
        revalidate: 1,
    };
}) satisfies GetStaticProps;

type Props = {
    fallback: {
        [key: string]: CommentType[];
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
