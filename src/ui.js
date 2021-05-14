function createClose() {
  const toDoList = document.querySelectorAll('.toDo');
  for (let i = 0; i < toDoList.length; i++) {
    const span = document.createElement('span');
    const txt = document.createElement('i');
    txt.classList.add('fas');
    txt.classList.add('fa-trash-alt');
    span.className = 'closeBtn';
    span.appendChild(txt);
    toDoList[i].appendChild(span);
  }
}

function createUI() {
  createClose();
  createTask();
}

export default createUI;
