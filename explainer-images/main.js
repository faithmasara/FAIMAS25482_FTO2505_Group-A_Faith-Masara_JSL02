// main.js

// Prompt user for 2 custom tasks
function createTask(taskNumber) {
  const title = prompt(`Enter the title for Task ${taskNumber}:`);
  const description = prompt(`Enter a description for Task ${taskNumber}:`);

  let status = '';
  while (true) {
    status = prompt(`Enter status for Task ${taskNumber} (todo, doing, done):`).toLowerCase();
    if (['todo', 'doing', 'done'].includes(status)) {
      break;
    } else {
      alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    }
  }

  return { title, description, status };
}

const tasks = [createTask(1), createTask(2)];

// Display user-entered tasks on board
function addTasksToBoard(tasks) {
  tasks.forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.className = 'bg-white shadow rounded-md p-4';
    taskElement.textContent = `${task.title} - ${task.description}`;

    const targetColumn = document.getElementById(`${task.status}-tasks`);
    if (targetColumn) {
      targetColumn.appendChild(taskElement);
    }
  });
}

// Log completed tasks or motivational message
function logCompletedTasks(tasks) {
  const completedTasks = tasks.filter(task => task.status === 'done');

  if (completedTasks.length > 0) {
    console.log("Completed Tasks:");
    completedTasks.forEach(task => {
      console.log(`- ${task.title} [${task.status}]`);
    });
  } else {
    console.log("No tasks completed, let's get to work!");
  }
}

addTasksToBoard(tasks);
logCompletedTasks(tasks);


