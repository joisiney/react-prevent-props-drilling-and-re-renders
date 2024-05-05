import {FC, PropsWithChildren} from 'react';
import {MessageContext} from './index.context';
import {useProvider} from './hooks';

export const MessageProvider:FC<PropsWithChildren> = ({children}) => {

    const provider = useProvider();

    return (
        <MessageContext.Provider value={provider}>
            {children}
        </MessageContext.Provider>
    );
};

