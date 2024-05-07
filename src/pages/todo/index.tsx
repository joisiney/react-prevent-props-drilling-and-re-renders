import {FC} from 'react';
import {MessageProvider} from '@/contexts/message';
import {SampleContext} from './components/sample-context';
import {SampleObserver} from './components/sample-observer';


export const TodoPage:FC = () => (
    <div className='flex min-h-screen gap-6 bg-slate-50 items-center justify-center'>
        <SampleObserver/>
        <MessageProvider>
            <SampleContext/>
        </MessageProvider>
    </div>
);