import {ObserverHelper} from '@/helper/observer';
import {useSyncExternalStore} from 'react';
type IProps = {
    observable?:string[]
    selector?:string
}

export const createStore = <Entity, Repository extends ObserverHelper<Entity>>(repository:Repository) => {
    return ({observable, selector} = {} as IProps) => {
        const messages = useSyncExternalStore(
            repository.subscribe(observable).bind(repository),
            repository.snapshot.bind(repository)
        );
        return selector && eval(selector) || messages; 
    };
};