import {useMessagesInMemoryObserver} from '@/application/observers/in-memory/messages';

export const useComponent = () => {
    const messages = useMessagesInMemoryObserver({
        observable:['messages'],
    });
    return {
        messages
    };
};