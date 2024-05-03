type IUser = {
    id: number;
    userId: number;
    content: string;
};
export class MessageEntity {
    constructor(private readonly fields:IUser) {
    }
    get id() {
        return this.fields.id;
    }
    get userId() {
        return this.fields.userId;
    }
    get content() {
        return this.fields.content;
    }
    toJSON() {
        return this.fields;
    }
}
