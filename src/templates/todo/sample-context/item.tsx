import {ImageMessageTodo} from '@/components/todo/message/Image';
import {FieldsetMessageTodo} from '@/components/todo/message/fieldset';
import {FormMessageTodo} from '@/components/todo/message/form';
import {RootMessageTodo} from '@/components/todo/message/root';
import {Badge} from '@/components/ui/badge';
import {useMessageContext} from '@/contexts/message';
import {MessageEntity} from '@/entity/Message';
import {FC, useRef} from 'react';

export const ItemSampleContextTodo:FC<{index:number, id:number}> = ({index}) => {
    const {messages, user, handleUpdateById} = useMessageContext();
    const message = messages[index];
    const counterRef = useRef(0);
    
    const handleUpdateContent = ({content}:{content:string})=>{
        handleUpdateById(new MessageEntity({
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