import { Header } from '@/src/components/Header';
import { FC, ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

const Layout: FC<Props> = (props) => {
    return (
        <div className="flex flex-col items-center p-2 leading-relaxed mx-auto max-w-2xl min-h-screen">
            <Header />
            {props.children}
        </div>
    );
};

export default Layout;
