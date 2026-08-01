const newTask = [];

function insertNewTask() {
    const taskInput = document.querySelector('.taskInputElement');
    const name = taskInput.value;

    const dateInput = document.querySelector('.dateInputElement');
    const dueDate = dateInput.value;

    if (!dueDate || !name) {
        alert('Enter the details of Task');
        return;
    }

    newTask.push({
        name: name,
        dueDate: dueDate
    });
    console.log(newTask);

    taskInput.value = '';
    dateInput.value = '';
    renderNewTask();

    
}
    
function renderNewTask() {
    let htmlContentList = '';

    for(let i = 0; i < newTask.length; i++){
        const newTaskArrayObject = newTask[i];
        const nameOfTask = newTaskArrayObject.name;
        const dueDateOfTask = newTaskArrayObject.dueDate;

        const htmlContent = 
        `<div class = "taskContainer">
            <p class="taskParagraph">
                ${nameOfTask} 
            </p>

            <p class = "date">
                ${dueDateOfTask}
                <button class = "deleteButton" onclick = "
                    newTask.splice(${i},1);
                    renderNewTask();
                    " >
                    Delete
                </button>
            </p>
            
        </div>
        `;    
        htmlContentList += htmlContent;

    }

    document.querySelector('.taskDisplayContainer').innerHTML = htmlContentList;
}















// const newTask = [];


// function renderTodoList(){
//     let htmlNewtask = '';

//     for(let i = 0; i < newTask.length; i++){

//         const taskName = 

//         const html = 
//         `<p>
//             ${newTask[i]} 
//             <button class = "deleteButton" onclick="
//                 newTask.splice(${i},1);
//                 renderTodoList();
//             " >
//                 Delete
//             </button> 
//         </p>`;
//         htmlNewtask += html;
//     }

//     console.log(htmlNewtask);

//     document.querySelector('.taskDisplay')
//         .innerHTML = htmlNewtask;
// }

// function addTask() {

//     const taskInputElement = document.querySelector('.taskInput');

//     newTask.push(taskInputElement.value);
//     console.log(newTask);

//     document.querySelector('.taskDisplay').innerHTML = newTask[0];

//     taskInputElement.value = '';

//     renderTodoList()

// }

