import {FC} from 'react';
import {TemplateContextTodo} from './components/todo/template-context';
import {TemplateStoreTodo} from './components/todo/template-store';
import {MessageProvider} from './contexts/message';
import './globals.css';

export const App:FC = () => {
    return (
        <div className='flex min-h-screen gap-6 bg-slate-50 items-center justify-center'>
            <TemplateStoreTodo/>
            <MessageProvider>
                <TemplateContextTodo/>
            </MessageProvider>
        </div>
    );
};
