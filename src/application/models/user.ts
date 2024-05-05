import {UserEntity} from '../entities/user';

export class UserModel {
    constructor(private readonly fields:UserEntity) {
    }
    get id() {
        return this.fields.id;
    }
    get name() {
        return this.fields.name;
    }
    get avatarURL() {
        return this.fields.avatar;
    }
    get avatarFallback() {
        const words = this.fields.name.split(' ');
        if (words.length === 1) {
            return words[0].substring(0, 2);
        } else {
            return words[0][0] + words[words.length - 1][0];
        }
    }
    toJSON() {
        return this.fields;
    }
}
