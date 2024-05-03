import {MessageEntity} from '@/entity/Message';
import {MessagesInMemoryRepository} from '@/repositories/in-memory/messages';
import {createStore} from '@/utils/createStore';

export const messagesInMemoryStore = new MessagesInMemoryRepository([]);
export const useMessagesInMemoryStore = createStore<MessageEntity[], MessagesInMemoryRepository>(messagesInMemoryStore);