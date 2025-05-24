const taskform = document.getElementById('task-form')
const taskInput = document.getElementById('task-input')
const taskList = document.getElementById('task-list')
const clearCompletedButtom = document.getElementById('clear-completed')
const filterButtonContainer = document.querySelector('.filter-buttons')
const filterButton= document.querySelectorAll('.filter-buttons button')
let activeId = 'all'

let tasks =JSON.parse(localStorage.getItem('tasks'))||[]

function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

taskform.addEventListener('submit',addTask);
function addTask(event){
    event.preventDefault();
    const task = taskInput.value.trim();
    tasks.push({
        text:task,
        completed : false
    })
    taskInput.value=''
     renderTaskList()
     saveTasks()
}

function renderTaskList (newTasks=tasks){
    taskList.innerHTML=''
    newTasks.forEach((task,index)=>{
        const li = document.createElement('li')
        li.innerHTML=`
        <span>${task.text}</span>
        <div>
        <button class="complete-button">${task.completed?"undo":"complete"}</button>
        <button class="edit-button">edit</button>
        <button class="delete-button">delete</button>
        </div>
        `
        const deleteButton = li.querySelector('.delete-button')
        const editButton = li.querySelector('.edit-button')
        const completeButton = li.querySelector('.complete-button')

        deleteButton.addEventListener('click',()=>deleteTask(index))
        editButton.addEventListener('click',()=>editTask(li,index))
        completeButton.addEventListener('click',()=>completeTask(index))

        li.className=`task-item ${task.completed?'completed':''}`
        taskList.appendChild(li)
    })
}

function deleteTask(index){
    tasks.splice(index,1);
    renderTaskList()
    saveTasks()
}

function editTask(li,index){
    const span = li.firstElementChild;
    const input = document.createElement('input')
    input.type='text'
    input.value=tasks[index].text
    input.focus()
    li.replaceChild(input,span)

    if(input.value){
        input.addEventListener('blur',()=>{
            tasks[index].text=input.value
            renderTaskList()
        })
    }
    saveTasks()
}

function completeTask(index){
    tasks[index].completed=!tasks[index].completed;
    renderTaskList()
    saveTasks()
}

filterButtonContainer.addEventListener('click',(event)=>{
    activeId = event.target.getAttribute('id')
    filterButton.forEach((item)=>{
        const itemId = item.id
        if(itemId==activeId){
            item.classList.add('active')
        }else {
            item.classList.remove('active')
        }
    })
    if(activeId=='all'){
        renderTaskList()
    }
    if(activeId=='active'){
        let newTasks = tasks.filter((task)=>{
            return (task.completed==false);
        })
        renderTaskList(newTasks)
    }
    if(activeId=='completed'){
        let newTasks = tasks.filter((task)=>{
            return (task.completed==true);
        })
        renderTaskList(newTasks)
    }
})

clearCompletedButtom.addEventListener('click',()=>{
    tasks=tasks.filter((task)=>{
        return (task.completed==false)
    })
    if(activeId!='completed'){
        renderTaskList()
    }else {
        renderTaskList([])
    }
    saveTasks()
})

renderTaskList()