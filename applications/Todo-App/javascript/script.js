let i = 0;
let todoList = {
    taskList: [],
    table: document.querySelector(".todo-list > ul"),

    // Model (MVC)
    saveTodo: function() {
        localStorage.setItem("todos", JSON.stringify(this.taskList));
    },

    createTodo: function(thisId, task, startDate, dueDate) {
        this.taskList.push( {
            id: thisId,
            task: task.value,
            startDate: startDate.value,
            dueDate: dueDate.value,
        });

        this.saveTodo();
    },

    // Control (MVC)
    addTask: function() {
        let thisId = i++;
        const textBox = document.getElementById("textbox-addTask");
        const startDate = document.getElementById("todo-startDate");
        const dueDate = document.getElementById("todo-dueDate");
        this.createTodo(thisId, textBox, startDate, dueDate);
        this.renderTask();
        textBox.value = "";
    },

    // View (MVC)
    renderTask: function() {

        this.table.innerHTML = " ";
        let createList = undefined;
        let createButton = undefined;
        this.taskList.forEach(task => {
            createList = document.createElement("li");
            // Delete Button
            createButton = document.createElement("button");
            createButton.innerText = "Delete Task";
            createButton.onclick = event => {
                let targetId = event.target.id;
                todoList.taskList = todoList.taskList.filter(todo => {
                    if(String(todo.id) === targetId) {
                        return false;
                    } else {
                        return true;
                    }
                })
                todoList.saveTodo();
                todoList.renderTask();
            };

            createButton.id = task.id;
            createList.innerHTML = task.id + "<br>";
            createList.innerHTML += "Title: " + task.task + "<br>";
            createList.innerHTML += "Start: " + task.startDate + "<br>";
            createList.innerHTML += "Due: " + task.dueDate + "<br><br>";
            this.table.appendChild(createList);
            this.table.appendChild(createButton);
        });
    }
};


let savedTodos = JSON.parse(localStorage.getItem("todos"))
if(Array.isArray(savedTodos)) {
    todoList.taskList = savedTodos;
    console.log(todoList.taskList);
}

todoList.renderTask();




























