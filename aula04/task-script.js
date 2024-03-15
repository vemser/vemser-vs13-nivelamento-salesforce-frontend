//Mapeamento dos elementos globais do projeto
const createTaskForm = document.getElementById("createTaskForm")
const taskInput = document.getElementById("taskInput")
const taskListContainer = document.getElementById("taskList")
const totalTasksEl = document.getElementById("totalTasks")

//Lista que irá armazenar as tasks
let taskList = []

createTaskForm.addEventListener("submit", (e) => addTask(e))

function addTask(e) {
  e.preventDefault()
  const inputValue = taskInput.value //Recupera o valor do input
  taskInput.value = "" //Limpa o input do formulário

  //Criação de uma nova task
  const taskId = generateRandomId()
  const newTask = {
    id: taskId,
    description: inputValue,
    isComplete: false
  }

  //Adiciona na lista
  taskList.push(newTask)

  //Adiciona no 'texto tarefas' criadas o número atualizado de tasks
  totalTasksEl.textContent = `Tarefas Criadas: ${taskList.length}`

  //Cria a div que agrupa os elementos de uma task
  const taskDiv = document.createElement("div")
  taskDiv.dataset.taskId = taskId
  taskDiv.classList.add("task")

  //Cria a descrição de uma task
  const taskDescription = document.createElement("p")
  taskDescription.textContent = inputValue

  //Cria o botão para remover uma task
  const removeBtn = document.createElement("button")
  removeBtn.textContent = "Remover Task"

  //Adiciona na div da task o botão e a descrição (texto).
  taskDiv.appendChild(taskDescription)
  taskDiv.appendChild(removeBtn)

  //Adiciona toda a div com seus elementos no container das tasks
  taskListContainer.appendChild(taskDiv)


  removeBtn.addEventListener("click", (e) => removeTask(e))
}

function removeTask(e) {
  const taskDivToDelete = e.target.parentNode //Recupera o nó do elemento a remover
  const taskIdToDelete = taskDivToDelete.dataset.taskId //Recupera o id da taks para remover da lista

  //Remove da lista a task com base no id
  taskList = taskList.filter((task) => task.id != taskIdToDelete)

  //Remove do DOM (em tela) a task
  taskListContainer.removeChild(taskDivToDelete)
}

//Cria um id aleatório que pode variar de 0,1 até 0,99
function generateRandomId() {
  const id = Math.floor(Math.random() * 100000000)
  return id
}