export class ObserverHelper<Entity> {
    private observers:{name?:string[], action:()=>void}[] = [];
    constructor(protected data:Entity){}

    subscribe(name?:string[]) {
        return (action:()=>void) => {
            this.observers.push({name, action});
            return action;
        };
    }
    unsubscribe(name:string[]) {
        this.observers = this.observers.filter((observer) => observer.name?.some((n) => name.includes(n)));
    }
    emitter(filter:(string|undefined)[] = []) {
        this.observers.forEach((observer) => {
            if (filter.length === 0 || observer.name?.some((name) => filter.includes(name))){
                observer.action();
            }
        });
    }
    snapshot() {
        return this.data;
    }
}