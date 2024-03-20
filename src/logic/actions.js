import Todo from "./todo";

export function createTodo(name) {
    return new Todo(name);
}

export function saveToLocal(item) {
    localStorage.setItem(item.title, JSON.stringify(item));
}

export function getSelectedTodo(key) {
    const todo = JSON.parse(localStorage.getItem(key));
    Object.setPrototypeOf(todo, Todo.prototype);
    return (todo);
}