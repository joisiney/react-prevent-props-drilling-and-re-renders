import {messagesInMemoryRepository} from '@/application/observers/in-memory/messages';
import {parseEventToFormData} from '@/utils/parseEventToFormData';
import {FormEvent, useRef} from 'react';

export const useTemplate = () => {
    const counterRef = useRef(0);
    
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        const data = parseEventToFormData<{content:string}>(event);
        messagesInMemoryRepository.add({
            content: data.content,
            userId: Math.random()
        });
    };
    return {
        counterRef,
        handleSubmit
    };
};