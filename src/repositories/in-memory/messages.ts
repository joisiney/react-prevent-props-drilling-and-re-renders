
import {MessageEntity} from '@/entity/Message';
import {ObserverHelper} from '@/helper/observer';

export class MessagesInMemoryRepository extends ObserverHelper<MessageEntity[]> {
    add(message:MessageEntity){
        this.data = [...this.data,message];
        this.emitter(['message']);
    }
    remove(id:number){
        this.data = this.data.filter((message) => message.id !== id);
        this.emitter();
    }
}