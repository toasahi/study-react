import Head from 'next/head';

import { Comment as CommentComponent } from '@/src/components/Comment';

const Comment = () => {
    return (
        <div>
            <Head>
                <title>Index</title>
            </Head>
            <CommentComponent />
        </div>
    );
};

export default Comment;
