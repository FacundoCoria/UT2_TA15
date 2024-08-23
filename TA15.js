const btnAñadir = document.getElementById("btnAñadir");
const btnEliminar = document.getElementById("btnEliminar")
const input = document.getElementById("input");
const list = document.getElementById("lst");

btnAñadir.addEventListener("click", () => {
    const inputText = input.value

    if (inputText !== "") { 
        const listItem = document.createElement("li"); 
        listItem.textContent = inputText; 
        list.appendChild(listItem); 
        input.value = ""; 
    }
});

btnEliminar.addEventListener("click", () => {
    const lastItem = list.lastElementChild;
    if (lastItem){
        list.removeChild(lastItem)
    }
});