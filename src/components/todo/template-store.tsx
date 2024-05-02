import {MessageEntity} from '@/entity/Message';
import {messagesInMemoryStore} from '@/store/in-memory/messages';
import {FC, FormEvent, useRef} from 'react';
import {Card} from '../ui/card';
import {FooterTodo} from './footer';
import {HeaderTodo} from './header';
import {MessageStore} from './messages-store';
import {parseEventToFormData} from './utils/parseEventToFormData';

export const TemplateStoreTodo:FC = () => {
    const counterRef = useRef(0);
    const handleAddMessageStore = (event: FormEvent<HTMLFormElement>) => {
        const data = parseEventToFormData<{content:string}>(event);
        messagesInMemoryStore.add(new MessageEntity({
            id: Math.random(),
            content: data.content,
            userId: Math.random()
        }));
    };
    
    return <Card className='w-[440px]'>
        <HeaderTodo title='Chat (store)' description={`Veja as renderizações do seu componente! ( ${counterRef.current++}x )`} />
        <MessageStore/>
        <FooterTodo onSubmit={handleAddMessageStore}/>
    </Card>;
};