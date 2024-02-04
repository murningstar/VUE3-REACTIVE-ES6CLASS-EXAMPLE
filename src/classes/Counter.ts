import { reactive } from "vue";

export class Counter {
    count: number;
    constructor() {
        this.count = 0;
        const reactiveThis = reactive(this);
        Object.keys(this).forEach((key) => {
            //@ts-ignore
            if (typeof this[key] == "function") {
                //@ts-ignore
                reactiveThis[key] = this[key].bind(reactiveThis);
            }
        });
        return reactiveThis;
    }
    increment() {
        this.count++;
    }
}
