import {MessagesInMemoryRepository} from '@/repositories/in-memory/messages';
import {useSyncExternalStore} from 'react';

export const messagesInMemoryStore = new MessagesInMemoryRepository([]);

export const useMessagesInMemoryStore = (notice?:string[]) => {
    return useSyncExternalStore(
        messagesInMemoryStore.subscribe(notice).bind(messagesInMemoryStore),
        messagesInMemoryStore.snapshot.bind(messagesInMemoryStore)
    );
};
