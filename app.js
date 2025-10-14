let tasks = [];
const titleInput = document.getElementById("myInput");
const descInput = document.getElementById("myText");
const taskList = document.getElementById("taskList");
const addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", () => {
  const title = titleInput.value.trim();
  const description = descInput.value.trim();

  if (title === "" || description === "") {
    alert("Please fill in both title and description.");
    return;
  }

  tasks.push({ title, description });

  titleInput.value = "";
  descInput.value = "";

  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = "<h3>Task List</h3>";
  if (tasks.length === 0) {
    taskList.innerHTML += "<p>No tasks available.</p>";
    return;
  }

  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <div class="task">
        <strong>${index + 1}. ${task.title}</strong><br/>
        <span>${task.description}</span>
      </div>
    `;
  });
}

function handleLogout() {
  window.location.href = "login.html";
}

const task = [
    { id: 1, title: "Task 1", completed: false },
    { id: 2, title: "Task 2", completed: true },
    { id: 3, title: "Task 3", completed: false }
  ];

  const pendingCountEl = document.getElementById("pending-count");


  function filterTasks(filter) {
    let filteredTasks = task;

    if (filter === 'completed') {
      filteredTasks = task.filter(task => task.completed);
    }
 
    const pendingCount = tasks.filter(task => !task.completed).length;
    pendingCountEl.textContent = pendingCount;

  }
    filterTasks('all');