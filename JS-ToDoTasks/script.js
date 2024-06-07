let addTask = document.getElementById('addToDo'); // button
let inputField = document.getElementById('inputTask'); //input text
let toDoContainer = document.getElementById('tableOfTasks'); //output table


//addTask.addEventListener('click', function(){
//        let inputField = document.getElementById('inputTask');
//        var newTask = document.createElement('p');
//        if (newTask.value == null){
//            alert('No hay valor')
//        } else {
//            newTask.innerText = inputField.value;
//            toDoContainer.appendChild(newTask);
//            inputField.value="";
//            newTask.addEventListener('click', function(){
//                newTask.style.textDecoration = "line-through";
//            })
//            newTask.addEventListener('dblclick', function(){
//                toDoContainer.removeChild(newTask);
//            })
//        }
//    })

addTask.addEventListener('click', function(){
    let inputField = document.getElementById('inputTask');
    if (inputField.value === "" ){
        alert('No hay tarea para añadir');
    } else {
        var newTask = document.createElement('p');
        newTask.innerText = inputField.value;
        toDoContainer.appendChild(newTask);
        inputField.value="";
        newTask.addEventListener('click', function(){
            newTask.style.textDecoration = "line-through";
        })
        newTask.addEventListener('dblclick',function(){
            toDoContainer.removeChild(newTask);
        })
    }
})