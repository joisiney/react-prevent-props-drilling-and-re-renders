import {useMessageContext} from '@/contexts/message';
import {MessageEntity} from '@/entity/Message';
import {FC, FormEvent, useRef} from 'react';
import {Card} from '../ui/card';
import {FooterTodo} from './footer';
import {HeaderTodo} from './header';
import {MessageContext} from './messages-context';
import {parseEventToFormData} from './utils/parseEventToFormData';


export const TemplateContextTodo:FC = () => {
    const message = useMessageContext();
    const counterRef = useRef(0);
    const handleAddMessageStore = (event: FormEvent<HTMLFormElement>) => {
        const data = parseEventToFormData<{content:string}>(event);
        message.handleAddMessage(new MessageEntity({
            id: Math.random(),
            content: data.content,
            userId: Math.random()
        }));
    };

    return <Card className='w-[440px]'>
        <HeaderTodo title='Chat (context)' description={`Veja as renderizações do seu componente! ( ${counterRef.current++}x )`} />
        <MessageContext/>
        <FooterTodo onSubmit={handleAddMessageStore}/>
    </Card>;
};