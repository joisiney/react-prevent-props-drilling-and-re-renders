import {ObserverHelper} from '@/application/helpers/observer';
import {CounterModel} from '@/application/models/counter';

export class CounterInMemoryRepository extends ObserverHelper<CounterModel> {
    private readonly MIN_VALUE = 0;
    private readonly MAX_VALUE = 10;
    increment(){
        if(this.data.value < this.MAX_VALUE){
            this.data = new CounterModel({value:this.data.value + 1});
            this.emitter(['counter']);
            return true;
        }
        return false;
    }
    decrement(){
        if(this.data.value > this.MIN_VALUE){
            this.data = new CounterModel({value:this.data.value - 1});
            this.emitter(['counter']);
            return true;
        }
        return false;
    }
}