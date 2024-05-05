import {createHookObserverHelper} from '@/application/helpers/observer/create.hook';
import {UserModel} from '@/application/models/user';
import {UserInMemoryRepository} from '@/application/repositories/in-memory/user';

export const userInMemoryRepository = new UserInMemoryRepository(new UserModel({
    id: 0,
    name: 'Joisiney Leandro'
}));

export const useUserInMemoryObserver = createHookObserverHelper<UserModel, UserInMemoryRepository>(
    userInMemoryRepository
);
