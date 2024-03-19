import Todo from "./todo";

export function createTodo(name) {
    return new Todo(name);
}

export function saveToLocal(item) {
    localStorage.setItem(item.title, JSON.stringify(item));
}