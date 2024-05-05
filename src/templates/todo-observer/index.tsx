import {FooterTodo} from '@/components/todo/footer';
import {HeaderTodo} from '@/components/todo/header';
import {Card} from '@/components/ui/card';
import {FC} from 'react';
import {Messages} from './components/messages';
import {useTemplate} from './index.hook';

export const TodoObserverTemplate:FC = () => {
    const template = useTemplate();
    
    return <Card className='w-[440px]'>
        <HeaderTodo title='Chat ( observer )' description={`Veja as renderizações do seu componente! ( ${template.counterRef.current++}x )`} />
        <Messages/>
        <FooterTodo onSubmit={template.handleSubmit}/>
    </Card>;
};