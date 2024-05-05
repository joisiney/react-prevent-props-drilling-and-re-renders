import {MessageEntity} from '@/application/entities/message';
import {ObserverHelper} from '@/application/helpers/observer';
import {MessageModel} from '@/application/models/message';
type Require<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;
type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export class MessagesInMemoryRepository extends ObserverHelper<MessageModel[]> {
    add(message:Optional<MessageEntity, 'id'>){
        const messageModel = new MessageModel({
            ...message,
            id:message.id ?? Math.random()
        });
        this.data = [...this.data,messageModel];
        this.emitter(['messages']);
    }
    updateById(message:Require<Partial<MessageEntity>, 'id'>){
        const index = this.data.findIndex((m)=>m.id === message.id);
        if(index === -1) return;
        const clone = [...this.data];

        const messageModel = new MessageModel({
            ...clone[index].toJSON(),
            ...message,
        });

        clone[index] = messageModel;
        this.data = clone;
        this.emitter([`messages.id-${message.id}`]);
    }
    remove(id:number){
        this.data = this.data.filter((message) => message.id !== id);
        this.emitter();
    }
}
