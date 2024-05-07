import {FooterTodo} from '@/components/todo/footer';
import {HeaderTodo} from '@/components/todo/header';
import {Card} from '@/components/shadcn-ui/card';
import {FC} from 'react';
import {Messages} from './components/messages';
import {useComponent} from './index.hook';

export const SampleObserver:FC = () => {
    const template = useComponent();
    
    return <Card className='w-[440px]'>
        <HeaderTodo title='Todo ( observer )' description={`Veja as renderizações do seu componente! ( ${template.counterRef.current++}x )`} />
        <Messages/>
        <FooterTodo onSubmit={template.handleSubmit}/>
    </Card>;
};