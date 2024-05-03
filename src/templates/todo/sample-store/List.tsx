import {CardContent} from '@/components/ui/card';
import {MessageEntity} from '@/entity/Message';
import {useMessagesInMemoryStore} from '@/store/in-memory/messages';
import {FC} from 'react';
import {ItemSampleStoreTodo} from './item';

export const ListSampleStoreTodo:FC = () => {
    const messages = useMessagesInMemoryStore({
        observable:['messages'],
    });
    
    return  <CardContent className='pb-0 gap-6 flex flex-col'>
        {messages.map((message:MessageEntity, index:number)=>(
            <ItemSampleStoreTodo key={`id-${message.id}`} index={index} id={message.id}/>
        ))}
    </CardContent>;
};