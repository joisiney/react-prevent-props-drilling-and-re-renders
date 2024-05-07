import {useMessageContext} from '@/contexts/message/index.hook';

export const useComponent = () => {
    const {messages} = useMessageContext();
    return {
        messages
    };
};