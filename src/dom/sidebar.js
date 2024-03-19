import { openPopup } from "./popup";

const sidebar = document.createElement("div");
sidebar.classList.add("sidebar");

const buttonNewTodo = document.createElement("button");
buttonNewTodo.textContent = "New Todo";
buttonNewTodo.addEventListener("click", openPopup)

sidebar.append(buttonNewTodo);

export default sidebar;