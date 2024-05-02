import {useMessageContext} from '@/contexts/message';
import {MessageEntity} from '@/entity/Message';
import {FC, FormEvent} from 'react';
import {Card} from '../ui/card';
import {FooterTodo} from './footer';
import {HeaderTodo} from './header';
import {MessageContext} from './messages-context';

export const TemplateContextTodo:FC = () => {
    const message = useMessageContext();
    const handleAddMessageStore = (event: FormEvent<HTMLFormElement>) => {
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries()) as {content:string};
        event.preventDefault();
        event.currentTarget.reset();
        message.handleAddMessage(new MessageEntity({
            id: Math.random(),
            content: data.content,
            userId: Math.random()
        }));
    };
    console.count('TemplateContextTodo');
    return <Card className='w-[440px]'>
        <HeaderTodo title='Chat (context)' description='Este é um chat' />
        <MessageContext/>
        <FooterTodo onSubmit={handleAddMessageStore}/>
    </Card>;
};