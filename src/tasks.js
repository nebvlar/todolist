import createTask from './tasks'
export default myTask = ['Boob'];

export default class Task {
  constructor(task, desc, date, priority, project) {
    this.taskName = taskName;
    this.desc = desc;
    this.date = date;
    this.priority = priority;
    this.project = project;
  }
}

function addTask() {
  newTask = document.forms['taskForm'];
  taskName = taskForm.elements['task'].value;
  desc = taskForm.elements['desc'].value;
  date = taskForm.elements['date'].value;
  priority = taskForm.elements['rad'].value;
  project = taskForm.elements['project'].value;

  newTask = new Task(task, desc, date, priority, project);

  myTask.push(newTask);
  console.log(myTask);
}

function updateTasks() {
  const taskList = document.querySelector('#toDoList');
  const tasks = document.querySelectorAll('.tasks');

  tasks.forEach((task) => taskList.removeChild(task));

  for (let i = 0; i < myTask.length; i++) {
    createTask(myTask[i]);
  }
}

function newTask() {
  addTask();
  updateTasks();
}

export default newTask();
