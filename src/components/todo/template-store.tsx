import {MessageEntity} from '@/entity/Message';
import {messagesInMemoryStore} from '@/store/in-memory/messages';
import {FC, FormEvent, useRef} from 'react';
import {Card} from '../ui/card';
import {FooterTodo} from './footer';
import {HeaderTodo} from './header';
import {MessageStore} from './messages-store';

export const TemplateStoreTodo:FC = () => {
    const counterRef = useRef(0);
    const handleAddMessageStore = (event: FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries()) as {content:string};
        event.preventDefault();
        event.currentTarget.reset();
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