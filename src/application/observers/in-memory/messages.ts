import {createHookObserverHelper} from '@/application/helpers/observer/create.hook';
import {MessageModel} from '@/application/models/message';
import {MessagesInMemoryRepository} from '@/application/repositories/in-memory/messages';

export const messagesInMemoryRepository = new MessagesInMemoryRepository([]);
export const useMessagesInMemoryObserver = createHookObserverHelper<MessageModel[], MessagesInMemoryRepository>(
    messagesInMemoryRepository
);
