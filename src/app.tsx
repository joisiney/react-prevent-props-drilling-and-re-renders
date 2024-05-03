import {FC} from 'react';
import {MessageProvider} from './contexts/message';
import './globals.css';
import {SampleContextTodoTemplate} from './templates/todo/sample-context';
import {SampleStoreTodoTemplate} from './templates/todo/sample-store';

export const App:FC = () => {
    return (
        <div className='flex min-h-screen gap-6 bg-slate-50 items-center justify-center'>
            <SampleStoreTodoTemplate/>
            <MessageProvider>
                <SampleContextTodoTemplate/>
            </MessageProvider>
        </div>
    );
};
