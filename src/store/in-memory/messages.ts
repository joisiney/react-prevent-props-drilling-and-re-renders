import {MessagesInMemoryRepository} from '@/repositories/in-memory/messages';
import {useSyncExternalStore} from 'react';

export const messagesInMemoryStore = new MessagesInMemoryRepository([]);

export const useMessagesInMemoryStore = (name?:string) => {
    return useSyncExternalStore(
        messagesInMemoryStore.subscribe(name).bind(messagesInMemoryStore),
        messagesInMemoryStore.snapshot.bind(messagesInMemoryStore)
    );
};