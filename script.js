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


function cambioCheckBox (){
  console.log(this)
  if (this.checked){
    tareasPendientes--;
  }else{
    tareasPendientes++;
  }
  renderizarContadores()
}

function crearTarea(name){
  const checkbox = document.createElement('input')
  checkbox.className = classNames.TODO_CHECKBOX
  // Agrego una funcion callback ("cambiocheckbox") 
  // al evento onchange de este input
  checkbox.onchange = cambioCheckBox
  checkbox.type = 'checkbox'

  const span = document.createElement('span')
  span.className = classNames.TODO_TEXT;
  span.setAttribute("editable", true)
  span.innerHTML = name

  const li = document.createElement('li')
  li.className = classNames.TODO_ITEM
  li.appendChild(checkbox)
  li.appendChild(span)

  return li
}

function renderizarContadores(){
  itemCountSpan.innerHTML = totalTareas.toString();
  uncheckedCountSpan.innerHTML = tareasPendientes.toString();
}

function addTodo() {


  //let nombre_tarea = `Tarea Nº ${totalTareas + 1}`
  let nombre_tarea = prompt("Por favor ingrese el nombre de la tarea")
  
  const tarea = crearTarea(nombre_tarea)
  if (tarea != undefined){
    // actualizo el contador de tareas
    totalTareas++;
    tareasPendientes++;
  }
  // Agrego la tarea a la lista
  list.appendChild(tarea)
  renderizarContadores();

}
