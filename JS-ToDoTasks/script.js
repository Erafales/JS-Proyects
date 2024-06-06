let addToDoTask = document.getElementById('addToDo');
let toDoContainer = document.getElementById('tableOfTasks');
let inputField = document.getElementById('inputTask');


addToDoTask.addEventListener('click', function(){
        var newTask = document.createElement('p');
        newTask.innerText = inputField.value;
        toDoContainer.appendChild(newTask);
        inputField.value="";
        newTask.addEventListener('click', function(){
            newTask.style.textDecoration = "line-through";
        })
        newTask.addEventListener('dblclick', function(){
            toDoContainer.removeChild(newTask);
        })
    })