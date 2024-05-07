import {FC, FormEventHandler} from 'react';
import {Button} from '../shadcn-ui/button';
import {CardFooter} from '../shadcn-ui/card';
import {Input} from '../shadcn-ui/input';

export const FooterTodo:FC<{onSubmit:FormEventHandler<HTMLFormElement>}> = ({onSubmit}) => (<form onSubmit={onSubmit}>
    <CardFooter className='space-x-2 pt-6'>
        <Input placeholder='Type your message...' name="content" />
        <Button type='submit'>Send</Button>
    </CardFooter>
</form>);