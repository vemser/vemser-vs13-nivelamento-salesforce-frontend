const createTaskForm = document.getElementById("createTaskForm")
const taskInput = document.getElementById("taskInput")
const taskListContainer = document.getElementById("taskList")

//import export

let taskList = []

const totalTasksEl = document.createElement("p")
totalTasksEl.textContent = "0"
taskListContainer.appendChild(totalTasksEl)

createTaskForm.addEventListener("submit", (e) => addTask(e))

function addTask(e) {
  e.preventDefault()
  const inputValue = taskInput.value
  const taskId = generateRandomId()
  const newTask = {
    id: taskId,
    description: inputValue,
    isComplete: false
  }

  taskList.push(newTask)
  taskInput.value = ""

  /**
   * <div>
   *  <p>Algum texto</p>
   * </div>
   */

  totalTasksEl.textContent = taskList.length

  const taskDiv = document.createElement("div")
  taskDiv.dataset.taskId = taskId
  taskDiv.classList.add("task")

  const taskDescription = document.createElement("p")
  taskDescription.textContent = inputValue

  const removeBtn = document.createElement("button")
  removeBtn.textContent = "Remover Task"

  taskDiv.appendChild(taskDescription)
  taskDiv.appendChild(removeBtn)

  taskListContainer.appendChild(taskDiv)

  removeBtn.addEventListener("click", (e) => {
    const taskDivToDelete = e.target.parentNode
    const taskIdToDelete = taskDivToDelete.dataset.taskId
    console.log(taskIdToDelete)

    taskList = taskList.filter((task) => task.id != taskIdToDelete)
    taskListContainer.removeChild(taskDivToDelete)
    console.log(taskList)
  })
}

//0,1 até 0,99
function generateRandomId() {
  const id = Math.floor(Math.random() * 100000000)
  return id
}