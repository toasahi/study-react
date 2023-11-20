import Head from 'next/head';

import { Comments as CommentsComponent } from '@/src/components/Comments';
import  type { Comment } from '@/src/types/comment';
import { GetServerSideProps } from 'next';
import { SWRConfig } from 'swr';

export const getStaticProps = (async () => {
    // ユーザー情報の取得
    const Comments_API_URL=`https://jsonplaceholder.typicode.com/comments`
    const comments = await fetch(Comments_API_URL)
    const CommentsData:Comment[] = await comments.json()
    return {
        props: {
            fallback: {
                [Comments_API_URL]: CommentsData,
            },
        },
    };
}) satisfies GetServerSideProps

type Props = {
    fallback : {
        [key:string]: Comment[]
    }
}


const Comments = (props:Props) => {
    const {fallback} = props
    return (
        <SWRConfig value={{fallback}}>    
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
