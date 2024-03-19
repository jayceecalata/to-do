export default class Todo {
    constructor(title) {
        this.title = title;
    }

    array = []

    add = item => {
        this.array.push(item);
    }

    getItems = () => this.array;

    removeFrom = index => {
        this.array.splice(index, 1);
    }
}