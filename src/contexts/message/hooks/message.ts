import {MessageModel} from '@/application/models/message';
import {useState} from 'react';

export const useMessage = () =>{
    const [messages, setMessages] = useState<MessageModel[]>([]);
    const handleAdd = (message:MessageModel) => {
        setMessages([...messages, message]);
    };

    const handleUpdateById = (message:MessageModel) => {
        setMessages(messages.map((m:MessageModel)=>m.id === message.id ? message : m));
    };
    return {
        messages,
        handleAdd,
        handleUpdateById
    };
};