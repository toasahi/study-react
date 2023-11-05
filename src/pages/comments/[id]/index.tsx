import { Comment as CommentComponent } from '@/src/components/Comment';
import Head from 'next/head';

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
