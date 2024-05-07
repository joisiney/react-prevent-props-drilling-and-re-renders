import {MessageModel} from '@/application/models/message';
import {useMessageContext} from '@/contexts/message/index.hook';
import {useRef} from 'react';
import {MessageComponentDto} from './index.dto';

export const useComponent = ({index}:MessageComponentDto.Props) => {
    const {messages, user, handleUpdateById} = useMessageContext();
    const message = messages[index];
    const counterRef = useRef(0);
    
    const handleUpdateContent = ({content}:{content:string})=>{
        handleUpdateById(new MessageModel({
            ...message.toJSON(),
            content
        }));
    };
    return {
        user,
        counterRef,
        message,
        handleUpdateContent
    };
};