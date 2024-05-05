import {FC} from 'react';
import {MessageProvider} from '@/contexts/message';
import {TodoContextTemplate} from '@/templates/todo-context';
import {TodoObserverTemplate} from '@/templates/todo-observer';

export const HomePage:FC = () => (
    <div className='flex min-h-screen gap-6 bg-slate-50 items-center justify-center'>
        <TodoObserverTemplate/>
        <MessageProvider>
            <TodoContextTemplate/>
        </MessageProvider>
    </div>
);