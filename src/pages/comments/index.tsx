import { Comments as CommentsComponent } from '@/src/components/Comments';
import Head from 'next/head';

const Comments = () => {
    return (
        <div>
            <Head>
                <title>Index</title>
            </Head>
            <CommentsComponent />
        </div>
    );
};

export default Comments;
