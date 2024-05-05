import {UserModel} from '@/application/models/user';
import {useState} from 'react';

export const useUser = () => {
    const [user] = useState<UserModel>(new UserModel({
        id: 0,
        name: 'Joisiney Leandro',
    }));
    return {user};
};