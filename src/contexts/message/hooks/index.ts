import {useMessage} from './message';
import {useUser} from './user';

export const useProvider = () => {
    const message = useMessage();
    const user = useUser();
    return {
        ...user,
        ...message
    };
};