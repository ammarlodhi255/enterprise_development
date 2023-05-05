export class Person {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log('walking...');
    }

    getRef() {
        return this;
    }
}

export function utils() {
    // some code
}