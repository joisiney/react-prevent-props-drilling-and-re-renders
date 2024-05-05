import {FC, PropsWithChildren} from 'react';
import {HeaderTemplate} from './header';

export const LayoutTemplate:FC<PropsWithChildren> = ({children}) => (
    <div className='bg-slate-50 flex'>
        <HeaderTemplate/>
        <main className='flex flex-1 flex-col min-h-screen gap-6 items-center justify-center'>
            {children}
        </main>
    </div>
);