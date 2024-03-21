import { createTodo, getSelectedTodo, saveToLocal } from "../logic/actions";
import { updateContent } from "./content";

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

/**
 * a form may not be necessary in this use case or even unconventional, however 
 * enclosing input with a form provides ease-of-use as you can just press enter 
 * right after typing, as opposed to pressing tab or clicking a submit button 
 * next to it
 */

const newTodo = document.createElement("form");
const inputTodoTitle = document.createElement("input", ["type", "text"]);
inputTodoTitle.id = "todo-title";
inputTodoTitle.setAttribute("placeholder" ,"New Todo");

newTodo.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = createTodo(inputTodoTitle.value);
    // validate todo

    saveToLocal(todo);
    document.querySelector("#todo-title").value = "";
    updateNav();
});

newTodo.appendChild(inputTodoTitle);

function createNav() {   
    const todoNav = document.createElement("div");
    todoNav.classList.add("todo-nav");

    const links = Object.keys(localStorage);
    for (const key of links) {
        const div = document.createElement("div");
        const button = document.createElement("button");
        button.addEventListener("click", () => {
            const currentTodo = getSelectedTodo(key);
            updateContent(currentTodo);
        })
        button.textContent = key;

        div.appendChild(button);
        todoNav.appendChild(div);
    }
    return todoNav;
}

export function updateNav() {
    const old = document.querySelector(".todo-nav");
    old.remove();
    sidebar.appendChild(createNav());
}

sidebar.appendChild(newTodo);
sidebar.appendChild(createNav());

export default sidebar;