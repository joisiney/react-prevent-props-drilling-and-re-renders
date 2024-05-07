import {CounterEntity} from '../entities/counter';

export class CounterModel {
    constructor(private readonly fields:CounterEntity) {
    }
    get value() {
        return this.fields.value;
    }
    toJSON() {
        return this.fields;
    }
}
