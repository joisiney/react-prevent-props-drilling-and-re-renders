import {FC, FormEventHandler} from 'react';
import {Button} from '../ui/button';
import {CardFooter} from '../ui/card';
import {Input} from '../ui/input';

export const FooterTodo:FC<{onSubmit:FormEventHandler<HTMLFormElement>}> = ({onSubmit}) => (<form onSubmit={onSubmit}>
    <CardFooter className='space-x-2 pt-6'>
        <Input placeholder='Type your message...' name="content" />
        <Button type='submit'>Send</Button>
    </CardFooter>
</form>);