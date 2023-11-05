import Link from 'next/link';
import classes from '@/src/components/Header/Header.module.css';

const NAV_ITEMS = [
    {
        href: '/posts',
        label: 'posts',
    },
    {
        href: '/',
        label: 'index',
    },
    {
        href: '/comments',
        label: 'comments',
    },
    {
        href: '/users',
        label: 'users',
    },
];

export const Header = () => {
    return (
        <header className={classes.header}>
            {NAV_ITEMS.map((item) => {
                return (
                    <Link
                        className={classes.anchor}
                        href={item.href}
                        key={item.href}
                    >
                        {item.label}
                    </Link>
                );
            })}
        </header>
    );
};
