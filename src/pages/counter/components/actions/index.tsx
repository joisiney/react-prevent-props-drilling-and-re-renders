import {Button} from '@/components/shadcn-ui/button';
import {useComponent} from './index.hook';
import {FC} from 'react';

export const ActionsCounter:FC = () => {
    const {handleIncrement, handleDecrement} = useComponent();
    return <div className='p-9 flex justify-center gap-6'>
        <Button onClick={handleDecrement}>-</Button>
        <Button onClick={handleIncrement}>+</Button>
    </div>;
};