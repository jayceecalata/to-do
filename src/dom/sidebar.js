import { openPopup } from "./popup";

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

const buttonNewTodo = document.createElement("button");
buttonNewTodo.textContent = "New Todo";
buttonNewTodo.addEventListener("click", openPopup)

function createNav() {   
    const todoNav = document.createElement("div");
    todoNav.classList.add("todo-nav");

    const links = Object.keys(localStorage);
    for (const link of links) {
        const div = document.createElement("div");
        const button = document.createElement("button");
        button.textContent = link;

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

sidebar.appendChild(buttonNewTodo);
sidebar.appendChild(createNav());

export default sidebar;