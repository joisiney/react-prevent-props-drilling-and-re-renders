import {FooterTodo} from '@/components/todo/footer';
import {HeaderTodo} from '@/components/todo/header';
import {Card} from '@/components/ui/card';
import {MessageEntity} from '@/entity/Message';
import {messagesInMemoryStore} from '@/store/in-memory/messages';
import {parseEventToFormData} from '@/utils/parseEventToFormData';
import {FC, FormEvent, useRef} from 'react';
import {ListSampleStoreTodo} from './List';

export const SampleStoreTodoTemplate:FC = () => {
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
        <ListSampleStoreTodo/>
        <FooterTodo onSubmit={handleAddMessageStore}/>
    </Card>;
};