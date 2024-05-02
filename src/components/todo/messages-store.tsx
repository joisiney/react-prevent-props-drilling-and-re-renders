import {FC} from 'react';
import {CardContent} from '../ui/card';
import {MessageTodo} from './message';
import {useMessagesInMemoryStore} from '@/store/in-memory/messages';
import {MessageEntity} from '@/entity/Message';

export const MessageStore:FC = () => {
    const messages = useMessagesInMemoryStore(['messages']);
    return  <CardContent className='pb-0 gap-6 flex flex-col'>
        {messages.map((message:MessageEntity)=>(<MessageTodo message={message} key={message.id}/>))}
    </CardContent>;
};