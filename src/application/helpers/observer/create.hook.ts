import {useSyncExternalStore} from 'react';
import {ObserverHelper} from '.';
type Props<Input, Output> = {
    observable?:string[]
    selector?:(data:Input)=>Output
}

export const createHookObserverHelper = <Input, Repository extends ObserverHelper<Input>>(repository:Repository) => {
    return <Output = Input>({observable, selector} = {} as Props<Input, Output>):Output|undefined => {
        const response = useSyncExternalStore(
            repository.subscribe(observable).bind(repository),
            repository.snapshot.bind(repository)
        );
        if(selector){
            return selector(response);
        }
        return response as unknown as Output;
    };
};