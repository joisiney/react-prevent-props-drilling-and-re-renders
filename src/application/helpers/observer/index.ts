export class ObserverHelper<Model> {
    private observers:{name?:string[], action:()=>void}[] = [];
    constructor(protected data:Model){}

    subscribe(name?:string[]) {
        return (action:()=>void) => {
            const total = this.observers.length;
            this.observers[total] = {name, action};
            return () => {
                this.observers = this.observers.filter((observer) => observer !== this.observers[total]);
            };
        };
    }
    
    emitter(filter:(string|undefined)[] = []) {
        this.observers.forEach((observer) => {
            const canObserver = observer.name?.some((name) => filter.includes(name));
            if (filter.length === 0 || canObserver){
                observer.action();
            }
        });
    }
    snapshot() {
        return this.data;
    }
}