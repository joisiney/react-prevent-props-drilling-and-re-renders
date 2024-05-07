import {FC} from 'react';
import {CardDescription, CardHeader, CardTitle} from '../shadcn-ui/card';
type Props = {
    title:string;
    description:string;
}
export const HeaderTodo:FC<Props> = ({title, description}) => (
    <CardHeader className='h-auto'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
    </CardHeader>
);