import {ImageMessageTodo} from '@/components/todo/message/Image';
import {FieldsetMessageTodo} from '@/components/todo/message/fieldset';
import {FormMessageTodo} from '@/components/todo/message/form';
import {RootMessageTodo} from '@/components/todo/message/root';
import {Badge} from '@/components/shadcn-ui/badge';
import {FC} from 'react';
import {MessageComponentDto} from './index.dto';
import {useComponent} from './index.hook';

export const Message:FC<MessageComponentDto.Props> = (props) => {
    const component = useComponent(props);

    return (
        <div className='flex items-center'>
            <RootMessageTodo>
                {component.user && (
                    <>
                        <ImageMessageTodo
                            src={component.user.avatarURL}
                            fallback={component.user.avatarFallback}
                        />
                        <FieldsetMessageTodo
                            title={
                                <>
                                    {component.user.name}
                                    <Badge
                                        variant="secondary"
                                        className='ml-2'
                                    >Edited ( {component.counterRef.current++} )</Badge>
                                </>
                            }
                        >
                            {component.message && (
                                <FormMessageTodo
                                    onSubmit={component.handleUpdateContent}
                                    content={component.message.content}
                                />
                            )}
                        </FieldsetMessageTodo>
                    </>
                )}
            </RootMessageTodo>
        </div>
    );
};