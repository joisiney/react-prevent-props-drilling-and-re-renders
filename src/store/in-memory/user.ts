import {IUser, UserEntity} from '@/entity/User';
import {UserInMemoryRepository} from '@/repositories/in-memory/user';
import {createStore} from '@/utils/createStore';

export const userInMemoryStore = new UserInMemoryRepository(new UserEntity({
    id: 0,
    name: 'Joisiney Leandro',
    avatar: 'https://github.com/joisiney.png'
} as IUser));

export const useUserInMemoryStore = createStore<UserEntity, UserInMemoryRepository>(userInMemoryStore);