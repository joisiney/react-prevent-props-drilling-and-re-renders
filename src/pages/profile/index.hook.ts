import {useUserInMemoryObserver, userInMemoryRepository} from '@/application/observers/in-memory/user';
import {parseEventToFormData} from '@/utils/parseEventToFormData';
import {useState} from 'react';

export const usePage = () => {
    const userData = useUserInMemoryObserver({
        observable:['user']
    });
    const [isSuccess, setIsSuccess] = useState(false);
    
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        const data = parseEventToFormData<{name:string}>(event);
        userInMemoryRepository.update({
            name:data.name
        });
        setIsSuccess(true);
    };
    return {
        userData,
        isSuccess,
        handleSubmit
    };
};