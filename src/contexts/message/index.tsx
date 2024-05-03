import {MessageEntity} from '@/entity/Message';
import {IUser, UserEntity} from '@/entity/User';
import {FC, PropsWithChildren, createContext, useContext, useState} from 'react';

type IMessageContextProps = {
    messages:MessageEntity[];
    user:UserEntity;
    handleAdd: (message: MessageEntity) => void
    handleUpdateById: (message: MessageEntity) => void
}

const MessageContext = createContext({} as IMessageContextProps);

export const MessageProvider:FC<PropsWithChildren> = ({children}) => {
    const [messages, setMessages] = useState<MessageEntity[]>([]);
    const [user] = useState<UserEntity>(new UserEntity({
        id: 0,
        name: 'Joisiney Leandro',
        avatar: 'https://github.com/joisiney.png'
    } as IUser));

    const handleAdd = (message:MessageEntity) => {
        setMessages([...messages, message]);
    };

    const handleUpdateById = (message:MessageEntity) => {
        setMessages(messages.map((m:MessageEntity)=>m.id === message.id ? message : m));
    };


    return (
        <MessageContext.Provider value={{user, messages, handleAdd, handleUpdateById}}>
            {children}
        </MessageContext.Provider>
    );
};

export const useMessageContext = () => {
    return useContext(MessageContext);
};