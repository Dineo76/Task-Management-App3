
let tasks = [
    { id: 1, text: "Task 1", status: "pending" },
    { id: 2, text: "Task 2", status: "completed" },
    { id: 3, text: "Task 3", status: "pending" },
    { id: 4, text: "Task 4", status: "completed" }
  ];
  
  
  const taskContainer = document.createElement('div');
  document.body.insertBefore(taskContainer, document.querySelector('.footer'));
  

  function renderTasks(filterStatus) {
    taskContainer.innerHTML = ''; 
  
    const filteredTasks = tasks.filter(task => {
      if (filterStatus === 'Delete') return false; 
      return task.status === filterStatus || filterStatus === 'all';
    });
  
    filteredTasks.forEach(task => {
      const taskEl = document.createElement('div');
      taskEl.textContent = task.text;
      taskEl.style.marginBottom = '8px';
  
     
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = task.status === 'completed';
      checkbox.onchange = () => toggleTaskStatus(task.id);
      taskEl.prepend(checkbox);
  
     
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.onclick = () => deleteTask(task.id);
      deleteBtn.style.marginLeft = '10px';
      taskEl.appendChild(deleteBtn);
  
      taskContainer.appendChild(taskEl);
    });
  
    updatePendingCount();
  }
  

  function toggleTaskStatus(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.status = task.status === 'completed' ? 'pending' : 'completed';
      renderTasks('all'); 
    }
  }
  
 
  function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    renderTasks('all');
  }
  

  function updatePendingCount() {
    const pendingCount = tasks.filter(task => task.status === 'pending').length;
    document.getElementById('pending-count').textContent = pendingCount;
  }
  
  
  function filterTasks(filter) {
    if (filter === 'Delete') {
      
      renderTasks('all');
    } else if (filter === 'completed') {
      renderTasks('completed');
    }
  }

  
  
 
  renderTasks('all');
  
