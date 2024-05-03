import {Card} from '@/components/ui/card';
import {useMessageContext} from '@/contexts/message';
import {MessageEntity} from '@/entity/Message';
import {FC, FormEvent, useRef} from 'react';
import {parseEventToFormData} from '@/utils/parseEventToFormData';
import {HeaderTodo} from '@/components/todo/header';
import {FooterTodo} from '@/components/todo/footer';
import {ListSampleContextTodo} from './List';

export const SampleContextTodoTemplate:FC = () => {
    const messageContext = useMessageContext();
    const counterRef = useRef(0);
    
    const handleAddMessageStore = (event: FormEvent<HTMLFormElement>) => {
        const data = parseEventToFormData<{content:string}>(event);
        messageContext.handleAdd(new MessageEntity({
            id: Math.random(),
            content: data.content,
            userId: Math.random()
        }));
    };
    
    return <Card className='w-[440px]'>
        <HeaderTodo title='Chat (context)' description={`Veja as renderizações do seu componente! ( ${counterRef.current++}x )`} />
        <ListSampleContextTodo/>
        <FooterTodo onSubmit={handleAddMessageStore}/>
    </Card>;
};