import {useContext} from 'react';
import {MessageContext} from './index.context';

export const useMessageContext = () => {
    return useContext(MessageContext);
};