import {CircleCheckBig} from 'lucide-react';
import {FC, PropsWithChildren} from 'react';

export const Success:FC<PropsWithChildren> = ({children}) => (<div className='text-center flex items-center flex-col gap-3 p-16'>
    <CircleCheckBig className='size-20 text-green-500' />
    <h1 className="text-2xl">{children}</h1>
</div>);