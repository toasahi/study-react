import { useUsers } from '@/src/hooks/useUsers';
import classes from '@/src/components/Users/Users.module.css';
import Link from 'next/link';

export const Users = () => {
    const { data, error, isEmpty, isLoading } = useUsers();

    if (isLoading) {
        return <div>ローディング</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }
    if (data && isEmpty) {
        return <div>データは空です</div>;
    }

    return (
        <>
            <ul className={classes.users}>
                {data?.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                {user.name}
                                {user.email}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
