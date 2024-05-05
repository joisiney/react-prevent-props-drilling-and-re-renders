import {UserEntity} from '@/application/entities/user';
import {ObserverHelper} from '@/application/helpers/observer';
import {UserModel} from '@/application/models/user';

export class UserInMemoryRepository extends ObserverHelper<UserModel> {
    update(newUser:Partial<UserEntity>){
        this.data = new UserModel({...this.data.toJSON(), ...newUser});
        this.emitter(['user']);
    }
}