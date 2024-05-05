import {Avatar, AvatarFallback, AvatarImage} from '@radix-ui/react-avatar';
import {FC} from 'react';

export const ImageMessageTodo:FC<{fallback:string; src?:string}> = ({src, fallback}) => (<Avatar className='w-12 h-12 bg-slate-100 flex items-center justify-center rounded-full overflow-hidden'>
    <AvatarFallback className='font-extrabold'>{fallback}</AvatarFallback>
    <AvatarImage src={src} alt={fallback} />
</Avatar>);