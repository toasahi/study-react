import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { SWRConfig } from 'swr';

import { Users as UsersComponent } from '@/src/components/Users';
import type { User } from '@/src/types/user';
import { API_URL } from '@/src/utils/const';

export const getServerSideProps = (async () => {
    // ユーザー情報の取得
    const USERS_API_URL = `${API_URL}/users`;
    const user = await fetch(USERS_API_URL);
    const usersData: User[] = await user.json();

    return {
        props: {
            fallback: {
                [USERS_API_URL]: usersData,
            },
        },
    };
}) satisfies GetServerSideProps;

type Props = {
    fallback: {
        [key: string]: User[];
    };
};

const Users = (props: Props) => {
    const { fallback } = props;
    return (
        <SWRConfig value={{ fallback }}>
            <div>
                <Head>
                    <title>Index</title>
                </Head>
                <UsersComponent />
            </div>
        </SWRConfig>
    );
};

export default Users;
