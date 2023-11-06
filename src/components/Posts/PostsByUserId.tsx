import { usePostsByUserId } from '@/src/hooks/useFetchArray';
import Link from 'next/link';

type Props = {
    id: number;
};

export const PostsByUserId = (props: Props) => {
    const { data, error, isLoading } = usePostsByUserId(props);

    if (isLoading) {
        return <div>ローディング</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <ul>
            {data?.map((user) => (
                <Link href={`/posts/${user.id}`}>
                    <li key={user.body}>{user.title}</li>
                </Link>
            ))}
        </ul>
    );
};
