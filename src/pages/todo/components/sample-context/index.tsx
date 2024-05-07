import {FooterTodo} from '@/components/todo/footer';
import {HeaderTodo} from '@/components/todo/header';
import {Card} from '@/components/shadcn-ui/card';
import {FC} from 'react';
import {Messages} from './components/messages';
import {useComponent} from './index.hook';

export const SampleContext:FC = () => {
    const template = useComponent();
    
    return <Card className='w-[440px]'>
        <HeaderTodo title='Todo ( context )' description={`Veja as renderizações do seu componente! ( ${template.counterRef.current++}x )`} />
        <Messages/>
        <FooterTodo onSubmit={template.handleSubmit}/>
    </Card>;
};