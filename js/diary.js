const input = document.getElementById("diary-input");
const button = document.getElementById("save-button");
const diarylist = document.getElementById("diary-list");

button.addEventListener("click",() => {
    if(input.value === ""){
        return;
    }
    
    const li = document.createElement("li");

    const date = document.createElement("p");

    const today = new Date();
    date.textContent =
    `${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}`;
    
    const content = document.createElement("p");
    content.textContent = input.value;
    

    const deletebutton = document.createElement("button")
    deletebutton.textContent = "削除";
    deletebutton.classList.add("delete-button");
    li.appendChild(deletebutton);

    deletebutton.addEventListener("click",() => {
        li.remove();
    });
    
    li.appendChild(date);
    li.appendChild(content);
    li.appendChild(deletebutton);

    diarylist.prepend(li);

    input.value = "";
});