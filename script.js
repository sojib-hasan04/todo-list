const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", function() {
    if (taskInput.value === "") {
        return;
    }
    const li = document.createElement("li");
    li.textContent = taskInput.value;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    li.appendChild(delBtn);

    delBtn.addEventListener("click", function() {
        li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
});