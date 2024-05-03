
import {IUser, UserEntity} from '@/entity/User';
import {ObserverHelper} from '@/helper/observer';

export class UserInMemoryRepository extends ObserverHelper<UserEntity> {
    update(newUser:Partial<IUser>){
        this.data = new UserEntity({...this.data.toJSON(), ...newUser});
        this.emitter(['user']);
    }
}