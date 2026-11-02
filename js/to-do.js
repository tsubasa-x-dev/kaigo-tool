const input = document.getElementById("todo-input");
const button = document.getElementById("add-button");
const todolist =document.getElementById("todo-list");

button.addEventListener("click",() => {
    if (input.value === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = input.value;
    todolist.prepend(li);
    input.value = "";

    const deletebutton = document.createElement("button");
    deletebutton.textContent = "削除";
    deletebutton.classList.add("delete-button");
    li.appendChild(deletebutton);

    deletebutton.addEventListener("click", () => {
        li.remove();
    });
});

