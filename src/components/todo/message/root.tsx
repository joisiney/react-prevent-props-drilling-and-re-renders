import {FC, PropsWithChildren} from 'react';

export const RootMessageTodo:FC<PropsWithChildren> = ({children}) => (<div className='flex flex-1 gap-3 text-slate-600 text-sn'>
    {children}
</div>);