import Head from 'next/head';

import { Users as UsersComponent } from '@/src/components/Users';

const Users = () => {
    return (
        <div>
            <Head>
                <title>Index</title>
            </Head>
            <UsersComponent />
        </div>
    );
};

export default Users;
