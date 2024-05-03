
import {MessageEntity} from '@/entity/Message';
import {ObserverHelper} from '@/helper/observer';

export class MessagesInMemoryRepository extends ObserverHelper<MessageEntity[]> {
    add(message:MessageEntity){
        this.data = [...this.data,message];
        this.emitter(['messages']);
    }
    updateById(message:MessageEntity){
        const index = this.data.findIndex((m)=>m.id === message.id);
        if(index === -1) return;
        const clone = [...this.data];
        clone[index] = message;
        this.data = clone;
        this.emitter([`messages.id-${message.id}`]);
    }
    remove(id:number){
        this.data = this.data.filter((message) => message.id !== id);
        this.emitter();
    }
}