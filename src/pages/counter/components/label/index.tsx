import {FC} from 'react';
import {useComponent} from './index.hook';

export const LabelCounter:FC = () => {
    const component = useComponent();
    return <div className='bg-gradient-to-r from-gray-100 to-gray-50 rounded-md flex justify-center items-center h-96'>
        <h1 className='text-[80px] font-light'>{component.counter?.value}</h1>
    </div>;
};