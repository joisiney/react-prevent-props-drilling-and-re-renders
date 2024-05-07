import {counterInMemoryRepository} from '@/application/observers/in-memory/counter';

export const useComponent = () => {
    
    const handleIncrement = () => {
        counterInMemoryRepository.increment();
    };
    const handleDecrement = () => {
        counterInMemoryRepository.decrement();
    };
    return {
        handleIncrement,
        handleDecrement
    };
};