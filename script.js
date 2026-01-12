const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter-section button");

addTaskBtn.addEventListener("click", function () {
  const text = taskInput.value.trim();

  if (text === "") {
    return;
  }

  taskList.innerHTML += `
    <li data-status="open">
      <span class="task-text">${text}</span>
      <button class="doneBtn">Erledigt</button>
      <button class="deleteBtn">Löschen</button>
    </li>
  `;

  taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
  const li = event.target.parentElement;

  if (event.target.classList.contains("doneBtn")) {
    if (li.dataset.status === "open") {
      li.dataset.status = "completed";
      event.target.textContent = "Offen";
    } else {
      li.dataset.status = "open";
      event.target.textContent = "Erledigt";
    }
  }

  
  if (event.target.classList.contains("deleteBtn")) {
    li.remove();
  }
});


filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filter = button.dataset.filter;
    const tasks = taskList.getElementsByTagName("li");

    for (let i = 0; i < tasks.length; i++) {
      const status = tasks[i].dataset.status;

      if (filter === "open") {
        tasks[i].style.display = status === "open" ? "" : "none";
      }

      if (filter === "completed") {
        tasks[i].style.display = status === "completed" ? "" : "none";
      }
    }
  });
});