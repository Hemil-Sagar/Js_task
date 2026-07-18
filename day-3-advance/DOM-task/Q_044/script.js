const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
    const li = document.createElement("li");

    li.textContent = taskInput.value;

    taskList.appendChild(li);

    taskInput.value = "";
}