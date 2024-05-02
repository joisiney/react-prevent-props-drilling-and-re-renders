type IUser = {
    id: number;
    name: string;
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
    get toJson() {
        return this.fields;
    }
}
