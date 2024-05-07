import {createHookObserverHelper} from '@/application/helpers/observer/create.hook';
import {CounterModel} from '@/application/models/counter';
import {CounterInMemoryRepository} from '@/application/repositories/in-memory/counter';

export const counterInMemoryRepository = new CounterInMemoryRepository(new CounterModel({
    value:0
}));

export const useCounterInMemoryObserver = createHookObserverHelper<CounterModel, CounterInMemoryRepository>(
    counterInMemoryRepository
);
