import Todo from "./todo";

export function createTodo(name) {
    return new Todo(name);
}

export function saveToLocal(item) {
    localStorage.setItem(item.title, JSON.stringify(item));
}

export function getSelectedTodo(key) {
    const obj = JSON.parse(localStorage.getItem(key));
    Object.setPrototypeOf(obj, Todo.prototype);
    return (obj.getItems());
}