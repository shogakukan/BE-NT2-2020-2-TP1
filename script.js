const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
  TODO_TEXT_CROSSED: 'todo-text-crossed',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function addTodo() {
  //alert('Boton Add TODO clickeado!')
  let todoName = prompt('Nombre de la tarea');
  if (todoName == "") {
    alert('No ha ingresado nada')
  } else if (todoName != null) {
    addToList(todoName);
  }
}

var itemCount = document.getElementById("item-count").innerHTML;

function addToList(todoName) {
  let item = document.createElement("li");
  item.classList.add(classNames.TODO_ITEM);
  item.append(createTodoCheckbox());
  item.append(createTodoLabel(todoName));
  item.append(createTodoBtn());
  list.append(item)
  updateCounts();
}

function updateUncheckedCheckers(){
  let checkers = document.getElementsByClassName("todo-checkbox");
  let count = 0;
  for (let i = 0; i < checkers.length; i++){
    if (!checkers[i].checked){
      count++;
    }
  }
  uncheckedCountSpan.innerHTML = count;
}

function updateCounts(){
  itemCountSpan.innerHTML = document.getElementsByClassName("todo-container").length;
  updateUncheckedCheckers();
}


function createTodoCheckbox() {
  let todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.classList.add(classNames.TODO_CHECKBOX);
  todoCheckbox.id = `checkbox-${document.getElementsByClassName("todo-container").length}`;
  todoCheckbox.setAttribute("onchange","checkedAction(this.checked, this.id);"); 
  return todoCheckbox;
}

function createTodoLabel(todoName) {
  let todoLabel = document.createElement("label");
  todoLabel.classList.add(classNames.TODO_TEXT);
  todoLabel.innerText = todoName;
  todoLabel.htmlFor = `checkbox-${document.getElementsByClassName("todo-container").length}`;
  return todoLabel;
}

function createTodoBtn() {
  let todoBtn = document.createElement("input");
  todoBtn.type = "button";
  todoBtn.classList.add(classNames.TODO_DELETE);
  todoBtn.value = "X";
  todoBtn.setAttribute("onclick","todoDelete(this);"); 
  return todoBtn;
}

function todoDelete(boton) {
  boton.parentElement.remove();
  updateCounts();
}

function checkedAction(checked, id){
  if (checked){
    document.getElementById(id).nextSibling.classList.add(classNames.TODO_TEXT_CROSSED);
  } else {
    document.getElementById(id).nextSibling.classList.remove(classNames.TODO_TEXT_CROSSED);
  }
  updateUncheckedCheckers();
}

