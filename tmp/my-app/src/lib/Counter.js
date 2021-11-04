export default class Counter {
    constructor() {
        this.count = 0;
    }

    increase() {
        this.count++;
    }

    getCount() {
        return this.count;
    }
};
