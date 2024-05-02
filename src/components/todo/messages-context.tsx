import {useMessageContext} from '@/contexts/message';
import {MessageEntity} from '@/entity/Message';
import {FC} from 'react';
import {CardContent} from '../ui/card';
import {MessageTodo} from './message';

export const MessageContext:FC = () => {
    const {messages} = useMessageContext();
    return  <CardContent className='pb-0 gap-6 flex flex-col'>
        {messages.map((message:MessageEntity)=>(<MessageTodo message={message} key={message.id}/>))}
    </CardContent>;
};