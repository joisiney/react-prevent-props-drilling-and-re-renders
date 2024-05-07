import {useCounterInMemoryObserver} from '@/application/observers/in-memory/counter';

export const useComponent = () => {
    
    const counter = useCounterInMemoryObserver({
        observable:['counter'],
    });
    return {
        counter
    };
};