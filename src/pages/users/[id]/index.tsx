import { GetServerSideProps } from 'next'

import { User } from '@/src/components/User';
import type { User as UserType} from '@/src/types/user';
import { SWRConfig } from 'swr';

export const getServerSideProps = (async (context) => {
    const { id } = context.query
    const API_URL=`https://jsonplaceholder.typicode.com/users/${id}`
    const user = await fetch(API_URL)
    const userData:UserType = await user.json()

    return {
        props: {
            fallback: {
                [API_URL]: userData,
            },
        },
    };
}) satisfies GetServerSideProps

type Props = {
    fallback : {
        [key:string]: UserType
    }
}

const UserId = (props: Props) => {
    const { fallback } = props;
    return (
        <SWRConfig value={{fallback}}>
        <div className="w-full">
            <User />
        </div>
        </SWRConfig>
    );
};

export default UserId;
