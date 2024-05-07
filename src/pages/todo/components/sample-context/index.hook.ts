import {MessageModel} from '@/application/models/message';
import {useMessageContext} from '@/contexts/message/index.hook';
import {parseEventToFormData} from '@/utils/parseEventToFormData';
import {FormEvent, useRef} from 'react';

export const useComponent = () => {
    const messageContext = useMessageContext();
    const counterRef = useRef(0);
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const data = parseEventToFormData<{content:string}>(event);
        messageContext.handleAdd(new MessageModel({
            id: Math.random(),
            content: data.content,
            userId: Math.random()
        }));
    };
    return {
        handleSubmit,
        counterRef
    };
};