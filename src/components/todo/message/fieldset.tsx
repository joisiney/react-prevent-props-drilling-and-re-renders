import {FC, PropsWithChildren, ReactNode} from 'react';
type IProps = {
    title:string | ReactNode;
}
export const FieldsetMessageTodo:FC<PropsWithChildren<IProps>> = ({children, title}) => (<div className='leading-relaxed'>
    <p className='block font-bold text-slate-700'>{title}</p>
    {children}
</div>);