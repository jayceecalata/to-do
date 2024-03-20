const content = document.createElement("div");

export function updateContent(todo) {
    const lists = todo.getItems();
    
    for(const item of lists) {
        const card = document.createElement("div");
        for (const [property, value] of Object.entries(item)) {
            const text = document.createElement("p");
            text.textContent = value;
            card.appendChild(text);
        }
        content.appendChild(card);
    }
}

export default content;