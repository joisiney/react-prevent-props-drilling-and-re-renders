import {MessageModel} from '@/application/models/message';
import {UserModel} from '@/application/models/user';
export namespace MessageContextDto{
    export type Output = {
        messages:MessageModel[];
        user:UserModel;
        handleAdd: (message: MessageModel) => void
        handleUpdateById: (message: MessageModel) => void
    }
}