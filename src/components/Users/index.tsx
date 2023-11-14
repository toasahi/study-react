import Link from 'next/link';

import { useUsers } from '@/src/hooks/useFetchArray';

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
            <ul className="grid grid-cols-2 gap-6">
                {data?.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link
                                href={`/users/${user.id}`}
                                className="block p-8 shadow rounded hover:bg-gray-100"
                            >
                                <h1 className="font-bold truncate">
                                    {user.name}
                                </h1>
                                <p className="text-sm truncate">{user.email}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
