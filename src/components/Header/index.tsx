import Link from 'next/link';

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
        <header className="flex justify-center items-center border-b w-full h-24">
            {NAV_ITEMS.map((item) => {
                return (
                    <Link
                        className="text-xl inline-block py-2 px-6 hover:bg-[rgba(180, 185, 188,0.1)] hover:border hover:border-[#838687] hover:border-opacity-{0.15}"
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

// .anchor:hover {
//     background: rgba(var(--card-rgb), 0.1);
//     border: 1px solid rgba(var(--card-border-rgb), 0.15);
// }
