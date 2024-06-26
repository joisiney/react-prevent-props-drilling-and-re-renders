import {parseEventToFormData} from '@/utils/parseEventToFormData';
import {FC, FormEvent,FocusEvent, PropsWithChildren} from 'react';
type IForm = {
    content:string
}
type IProps = {
    content:string;
    onSubmit:(data:IForm)=>void
}
export const FormMessageTodo:FC<PropsWithChildren<IProps>> = ({content, onSubmit}) => {
    const handleSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const data = parseEventToFormData<IForm>(event);
        onSubmit(data);
    };

    const handleBlur = (event:FocusEvent<HTMLInputElement>)=>{
        event.target.form?.requestSubmit?.();
    };
   
    return <form className='leading-relaxed' onSubmit={handleSubmit}>
        <input defaultValue={content} name="content" onBlur={handleBlur}/>
    </form>;
};