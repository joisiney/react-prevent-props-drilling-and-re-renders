import {CardContent} from '@/components/ui/card';
import {useMessageContext} from '@/contexts/message';
import {MessageEntity} from '@/entity/Message';
import {FC} from 'react';
import {ItemSampleContextTodo} from './item';

export const ListSampleContextTodo:FC = () => {
    const {messages} = useMessageContext();

    return  <CardContent className='pb-0 gap-6 flex flex-col'>
        {messages.map((message:MessageEntity, index)=>(
            <ItemSampleContextTodo  key={`id-${message.id}`} index={index} id={message.id}/>
        ))}
    </CardContent>;
};