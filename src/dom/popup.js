import { createTodo, saveToLocal } from "../logic/actions";

const popup = document.createElement("div");
popup.classList.add("popup");

const dialog = document.createElement("dialog");

const form = document.createElement("form");

const inputTodoTitle = document.createElement("input");
inputTodoTitle.setAttribute("type", "text");

const buttonCreateTodo = document.createElement("button");
buttonCreateTodo.textContent = "Save";
buttonCreateTodo.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
    const todo = createTodo(inputTodoTitle.value);
    saveToLocal(todo);
    inputTodoTitle.value = "";
})

form.appendChild(inputTodoTitle);
form.appendChild(buttonCreateTodo);
dialog.appendChild(form);   
popup.appendChild(dialog);

export default popup;

export function openPopup() {
    dialog.showModal();
}