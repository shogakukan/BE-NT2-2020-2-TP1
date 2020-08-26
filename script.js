const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}


const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let totalTareas = 0
let tareasPendientes = 0


function addTodo() {
  console.log("Aqui viene la magia: ")

  // Aqui hago la creacion del elemento
  const checkbox = document.createElement('input')
  checkbox.className = classNames.TODO_CHECKBOX
  checkbox.type = 'checkbox'

  console.log("elemento checkbox", checkbox)
}
