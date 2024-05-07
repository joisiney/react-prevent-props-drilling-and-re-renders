import {messagesInMemoryRepository, useMessagesInMemoryObserver} from '@/application/observers/in-memory/messages';
import {useUserInMemoryObserver} from '@/application/observers/in-memory/user';
import {useRef} from 'react';
import {MessageComponentDto} from './index.dto';

export const useComponent = ({id, index}:MessageComponentDto.Props) => {
    const user = useUserInMemoryObserver({
        observable:['user']
    });
    const counterRef = useRef(0);
    
    const message = useMessagesInMemoryObserver({
        observable:[`messages.id-${id}`],
        selector:(data)=>{
            return data[index];
        }
    });
    
    const handleUpdateContent = ({content}:{content:string})=>{
        if(message){
            messagesInMemoryRepository.updateById({
                id:message.id,
                content
            });
        }
    };
    return {
        user,
        counterRef,
        message,
        handleUpdateContent
    };
};