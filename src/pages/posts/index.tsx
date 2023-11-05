import { Posts as PostsComponent } from '@/src/components/Posts';
import Head from 'next/head';

const Posts = () => {
    return (
        <div>
            <Head>
                <title>Index</title>
            </Head>
            <PostsComponent />
        </div>
    );
};

export default Posts;
