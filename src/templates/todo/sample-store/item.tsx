import {ImageMessageTodo} from '@/components/todo/message/Image';
import {FieldsetMessageTodo} from '@/components/todo/message/fieldset';
import {FormMessageTodo} from '@/components/todo/message/form';
import {RootMessageTodo} from '@/components/todo/message/root';
import {Badge} from '@/components/ui/badge';
import {MessageEntity} from '@/entity/Message';
import {messagesInMemoryStore, useMessagesInMemoryStore} from '@/store/in-memory/messages';
import {useUserInMemoryStore} from '@/store/in-memory/user';
import {FC, useRef} from 'react';

export const ItemSampleStoreTodo:FC<{index:number, id:number}> = ({index, id}) => {
    const user = useUserInMemoryStore({
        observable:['user']
    });
    const counterRef = useRef(0);
    
    const message = useMessagesInMemoryStore({
        observable:[`messages.id-${id}`],
        selector:`messages[${index}]`
    });
    
    const handleUpdateContent = ({content}:{content:string})=>{
        messagesInMemoryStore.updateById(new MessageEntity({
            ...message.toJSON(),
            content
        
        }));
    };

    return <div className='flex items-center'>
        <RootMessageTodo>
            <ImageMessageTodo src={user.avatarURL} fallback={user.avatarFallback}/>
            <FieldsetMessageTodo title={
                <>
                    {user.name}
                    <Badge variant="secondary" className='ml-2'>Edited ( {counterRef.current++} )</Badge>
                </>
            }>
                <FormMessageTodo onSubmit={handleUpdateContent} content={message.content}/>
            </FieldsetMessageTodo>
        </RootMessageTodo>
    </div>;
};