// let i = 0;
// let todoList = {
//     taskList: [],
//     table: document.querySelector(".todo-list > ul"),

//     // Model (MVC)
//     saveTodo: function() {
//         localStorage.setItem("todos", JSON.stringify(this.taskList));
//     },

//     createTodo: function(thisId, task, startDate, dueDate) {
//         this.taskList.push( {
//             id: thisId,
//             task: task.value,
//             startDate: startDate.value,
//             dueDate: dueDate.value,
//         });

//         this.saveTodo();
//     },

//     // Control (MVC)
//     addTask: function() {
//         let thisId = i++;
//         const textBox = document.getElementById("textbox-addTask");
//         const startDate = document.getElementById("todo-startDate");
//         const dueDate = document.getElementById("todo-dueDate");
//         this.createTodo(thisId, textBox, startDate, dueDate);
//         this.renderTask();
//         textBox.value = "";
//     },

//     // View (MVC)
//     renderTask: function() {

//         this.table.innerHTML = " ";
//         let createList = undefined;
//         let createButton = undefined;
//         this.taskList.forEach((task) => {
//             createList = document.createElement("li");
//             // Delete Button
//             createButton = document.createElement("button");
//             createButton.innerText = "Delete Task";
//             createButton.onclick = (event) => {
//                 let targetId = event.target.id;
//                 todoList.taskList = todoList.taskList.filter(todo => {
//                     if(String(todo.id) === targetId) {
//                         return false;
//                     } else {
//                         return true;
//                     }
//                 })
//                 todoList.saveTodo();
//                 todoList.renderTask();
//             };

//             createButton.id = task.id;
//             createList.innerHTML = task.id + "<br>";
//             createList.innerHTML += "Title: " + task.task + "<br>";
//             createList.innerHTML += "Start: " + task.startDate + "<br>";
//             createList.innerHTML += "Due: " + task.dueDate + "<br><br>";
//             this.table.appendChild(createList);
//             this.table.appendChild(createButton);
//         });
//     }
// };


// let savedTodos = JSON.parse(localStorage.getItem("todos"))
// if(Array.isArray(savedTodos)) {
//     todoList.taskList = savedTodos;
//     console.log(todoList.taskList);
// }

// todoList.renderTask();




let employee = {
    name: undefined,
    email: undefined,
    salary: undefined,

    speakName: function() {
        console.log(this.name);
    },

    raiseSalary: function() {
        const newSalary = this.salary * .5;
        this.salary = this.salary + newSalary;
        console.log(this.salary);
    }
}


let animals = [];

animals.push({
    name: "Cat",
    color: "Brown",
    breed: "Tiger"
});

console.log(animals[0].color);

// let person1 = employee;
// let person2 = employee;

// person1.name = "fred";
// person1.speakName();
// person2.salary = 2000;
// person2.raiseSalary();

// person2.name = "marian";
// person2.speakName();
// person2.salary = 1000;
// person2.raiseSalary();


































