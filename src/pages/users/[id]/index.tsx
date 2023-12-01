import { GetServerSideProps } from 'next';

import { User } from '@/src/components/User';
import type { User as UserType } from '@/src/types/user';
import { SWRConfig } from 'swr';
import { Post } from '@/src/types/post';
import { API_URL } from '@/src/utils/const';

export const getServerSideProps = (async (context) => {
    const { id } = context.query;
    // ユーザー情報の取得
    const USER_API_URL = `${API_URL}/users/${id}`;
    const user = await fetch(USER_API_URL);
    const userData: UserType = await user.json();

    // 投稿情報の取得
    const POAT_API_URL = `${API_URL}/posts?userId=${userData.id}`;
    const posts = await fetch(POAT_API_URL);
    const postsData: Post[] = await posts.json();

    return {
        props: {
            fallback: {
                [USER_API_URL]: userData,
                [POAT_API_URL]: postsData,
            },
        },
    };
}) satisfies GetServerSideProps;

type Props = {
    fallback: {
        [key: string]: UserType | Post[];
    };
};

const UserId = (props: Props) => {
    const { fallback } = props;
    return (
        <SWRConfig value={{ fallback }}>
            <div className="w-full">
                <User />
            </div>
        </SWRConfig>
    );
};

export default UserId;
