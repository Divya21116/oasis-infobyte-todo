const form = document.getElementById('form');
const input = document.getElementById('input');
const pendingTasks = document.getElementById('pending-tasks');
const completedTasks = document.getElementById('completed-tasks');

let tasks = [];

function renderTasks() {
  pendingTasks.innerHTML = '';
  completedTasks.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteButton = document.createElement('button');
    const completeButton = document.createElement('button');
    
    span.innerText = task.text;
    
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', () => {
      deleteTask(index);
    });
    
    completeButton.innerText = 'Complete';
    completeButton.addEventListener('click', () => {
      completeTask(index);
    });
    
    li.appendChild(span);
    li.appendChild(deleteButton);
    li.appendChild(completeButton);
    
    if (task.completed) {
      li.classList.add('completed');
      completedTasks.appendChild(li);
    } else {
      pendingTasks.appendChild(li);
    }
  });
}

function addTask(event) {
  event.preventDefault();
  
  const text = input.value.trim();
  
  if (text.length === 0) {
    return;
  }
  
  tasks.push({
    text: text,
    completed: false,
    timestamp: new Date().getTime()
  });
  
  input.value = '';
  
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function completeTask(index) {
  tasks[index].completed = true;
  renderTasks();
}

form.addEventListener('submit', addTask);
