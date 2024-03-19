export class Container {
    array = []

    add = item => {
        this.array.push(item);
    }

    getItems = () => this.array;

    removeFrom = index => {
        this.array.splice(index, 1);
    }
}

export class Project extends Container {
    constructor(name) {
        super();
        this.name = name;
    }
}