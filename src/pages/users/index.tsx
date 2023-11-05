import { Users as UsersComponent } from '@/src/components/Users';
import Head from 'next/head';

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
