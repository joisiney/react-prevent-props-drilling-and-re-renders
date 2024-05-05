import {MessageEntity} from '../entities/message';

export class MessageModel {
    constructor(private readonly fields:MessageEntity) {
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
