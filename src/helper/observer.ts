export class ObserverHelper<Entity> {
    private actions:{name?:string, action:()=>void}[] = [];
    constructor(protected data:Entity){}

    subscribe(name?:string) {
        return (action:()=>void) => {
            this.actions.push({name, action});
            return action;
        };
    }
    unsubscribe(name:string) {
        this.actions = this.actions.filter((action) => action.name !== name);
    }
    emitter(filter:(string|undefined)[] = []) {
        this.actions.forEach((action) => {
            if (filter.length === 0 || filter.includes(action.name)) {
                action.action();
            }
        });
    }
    snapshot() {
        return this.data;
    }
}