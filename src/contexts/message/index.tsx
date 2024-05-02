import {MessageEntity} from '@/entity/Message';
import {FC, PropsWithChildren, createContext, useContext, useState} from 'react';

type IMessageContextProps = {
    messages:MessageEntity[];
    handleAddMessage: (message: MessageEntity) => void
}

const MessageContext = createContext({} as IMessageContextProps);

export const MessageProvider:FC<PropsWithChildren> = ({children}) => {
    const [messages, setMessages] = useState<MessageEntity[]>([]);

    const handleAddMessage = (message:MessageEntity) => {
        setMessages([...messages, message]);
    };

    return (
        <MessageContext.Provider value={{messages, handleAddMessage}}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessageContext = () => {
    return useContext(MessageContext);
};