export default class Todo {
    constructor(title) {
        this.title = title;
    }

    array = []
}

Todo.prototype.add = function(item) {
    return (this.array.push(item));
}

Todo.prototype.getItems = function() {
    return this.array;
}