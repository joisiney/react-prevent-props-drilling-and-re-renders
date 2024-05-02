import {MessageEntity} from '@/entity/Message';
import {Avatar, AvatarFallback, AvatarImage} from '@radix-ui/react-avatar';
import {FC} from 'react';

export const MessageTodo:FC<{message:MessageEntity}> = ({message}) => (<div className='flex gap-3 text-slate-600 text-sn'>
    <Avatar className='w-12 h-12 rounded-full overflow-hidden'>
        <AvatarFallback>AI</AvatarFallback>
        <AvatarImage src="https://github.com/joisiney.png" alt="AI" />
    </Avatar>
    <p className='leading-relaxed'>
        <span className='block font-bold text-slate-700'>Joisiney:</span>
        {message.content}
    </p>
</div>);