import Head from 'next/head';

import { Comments as CommentsComponent } from '@/src/components/Comments';

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
