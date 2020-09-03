const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


let toDoItems = [];
class ToDoItem {
  constructor(tarea) {
    this.text = tarea;
    this.checked = false;
    this.element = null; //me guardo el elemento HTML ya renderizado
  }

  toggleCheckbox() {
    this.checked = !this.checked;
    renderCounts()
  }

  deleteItem (){
    toDoItems.splice(toDoItems.indexOf(this), 1);
    render();
  }

}

function renderToDoItem(toDoItem) {
  if (toDoItem.element) {
    return toDoItem.element; //si ya lo rendericé una vez, no hace falta volver a hacerlo
  } else {
    const listItem = document.createElement("li");
    listItem.className = classNames.TODO_ITEM;

    const itemCheckbox = document.createElement("input")
    itemCheckbox.type = "checkbox";
    itemCheckbox.checked = toDoItem.checked;
    itemCheckbox.className = classNames.TODO_CHECKBOX;
    itemCheckbox.onchange = toDoItem.toggleCheckbox.bind(toDoItem);
    listItem.append(itemCheckbox);

    const itemSpan = document.createElement("span");
    itemSpan.innerHTML = toDoItem.text;
    itemSpan.className = classNames.TODO_TEXT;
    listItem.append(itemSpan);

    const itemButton = document.createElement("input");
    itemButton.value = "X";
    itemButton.className = classNames.TODO_DELETE;
    itemButton.onclick = toDoItem.deleteItem.bind(toDoItem);
    itemButton.type = "button";
    listItem.append(itemButton);

    toDoItem.element = listItem;
    return listItem;

  }
}

function addTodo() {
  //alert('Boton Add TODO clickeado!')
  const todoName = prompt('Nombre de la tarea');
  if (todoName == "") {
    alert('No ha ingresado nada')
  } else if (todoName != null) {
    toDoItems.push(new ToDoItem(todoName));
    render();
  }
}

function render() {
  list.innerHTML = "";
  toDoItems.forEach(x => list.append(renderToDoItem(x)))
  renderCounts()
}

function renderCounts() {
  uncheckedCountSpan.innerHTML = toDoItems.filter(x => x.checked === false).length
  itemCountSpan.innerHTML = toDoItems.length;
}

