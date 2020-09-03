const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  let tareas = []
  
  
  // Opcion 1 con funcion
  function Tarea(titulo){
    this.titulo = titulo
    this.checked = false
    this.element = null // this.element es el elemento HTML asociado a este objeto
    this.checkbox = null// this.checkbox es el element checkbox asociado a este objeto (me va a servir para bindearlo contra this.tooglecheckbox)
    this.toogleCheck = function (){

      
      this.checked = !this.checked
  
      // Garantizo la equidad de nuestro elemento html bindeado a esta tarea!
      if (this.element && this.checkbox){
        this.checkbox.checked = this.checked
      } else {
        this.element = renderTarea(this)
      }
  
      renderizarContadores()
    }
  }
  
  //Opcion 2 con Clase
  class TODO {
    constructor(titulo){
      this.titulo = titulo
      this.checked = false
  
      this.element = null // this.element es el elemento HTML asociado a este objeto
      this.checkbox = null// this.checkbox es el element checkbox asociado a este objeto (me va a servir para bindearlo contra this.tooglecheckbox)
    }
  
    toogleCheck(){
      this.checked = !this.checked
  console.log("hola")
      // Garantizo la equidad de nuestro elemento html bindeado a esta tarea!
      if (this.element && this.checkbox){
        this.checkbox.checked = this.checked
      } else {
        this.element = renderTarea(this)
      }
    }
  }
  
  function counter(array, fn){
    return array.reduce((acc, next) => fn(next) ? acc + 1 : acc, 0)
  }
  
  function renderTarea(tarea){
    if (tarea.element) return tarea.element
  
    const checkbox = document.createElement('input')
    checkbox.className = classNames.TODO_CHECKBOX
    checkbox.type = "checkbox"
  
    checkbox.tareaRef = tarea
    checkbox.onchange = tarea.toogleCheck.bind(tarea)
  
    const span = document.createElement('span')
    span.className = classNames.TODO_TEXT
    span.innerHTML = tarea.titulo
    span.setAttribute("contenteditable", true)
  
    const li = document.createElement('li')
    li.className = classNames.TODO_ITEM
    li.appendChild(checkbox)
    li.appendChild(span)
  
    // vamos a guardar la referencia.
    tarea.element = li
    tarea.checkbox = checkbox
  
    return li
  }
  
  function renderizarContadores(){
    uncheckedCountSpan.innerHTML = counter(tareas, tarea => !tarea.checked)
    itemCountSpan.innerHTML = tareas.length
  }
  
  function render(){
    //Limpio la lista de tareas
    list.innerHTML = ''
  
    tareas.map(renderTarea).forEach(elemento_tarea => {
      list.appendChild(elemento_tarea)
    })
  
    renderizarContadores()
  
    return false;
    
  }
  
  function addTodo() {
    
    //const tarea = new Tarea(prompt("Ingrese titulo de la tarea: "))
    const tarea = new Tarea(`Tarea Nº ${tareas.length + 1}`)
  
    tareas.push(tarea)
  
    // Toca renderizar
  
    return render()
  }