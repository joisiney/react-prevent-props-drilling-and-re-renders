import {MessageEntity} from '@/application/entities/message';
import {CardContent} from '@/components/ui/card';
import {FC} from 'react';
import {Message} from '../message';
import {useComponent} from './index.hook';

export const Messages:FC = () => {
    const component = useComponent();
    
    return  <CardContent className='pb-0 gap-6 flex flex-col'>
        {component.messages?.map((message:MessageEntity, index:number)=>(
            <Message key={`id-${message.id}`} index={index} id={message.id}/>
        ))}
    </CardContent>;
};