export type IUser = {
    id: number;
    name: string;
    avatar: string;
};
export class UserEntity {
    constructor(private readonly fields:IUser) {
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
        if(!this.fields.avatar)return 'NU';
        const words = this.fields.avatar.split(' ');
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
