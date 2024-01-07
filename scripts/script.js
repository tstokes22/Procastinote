class ToDoList {
    constructor() {
      this.taskInput = document.getElementById("taskInput");
      this.taskList = document.getElementById("taskList");
      this.bindEventListeners();
      this.addTask();
      this.checkInput();
    }
  
    bindEventListeners() {
      document.getElementById("addTaskBtn").addEventListener("click", () => {
        this.addTask();
      });
      this.taskInput.addEventListener("click", () => {
      });
      this.taskInput.addEventListener("input", () => {
        this.checkInput();
        console.log(String(this.taskInput.value))
      });
      
    }
  
    addTask() {
      const taskName = this.taskInput.value.trim();
      if (taskName !== "") {
        const task = document.createElement("li");
        task.setAttribute("id", "task");
        const taskCheckBox = document.createElement("input");
        taskCheckBox.setAttribute("id", "taskCheckBox");
        const removeButton = document.createElement("input");
        removeButton.type = "image";
        removeButton.src = "images/trash.svg";
        removeButton.setAttribute("id", "removeTaskButton");
       
        taskCheckBox.type = "checkbox";
        task.innerText = taskName;
        this.taskList.append(removeButton);
        this.taskList.append(taskCheckBox);
        this.taskList.append(task);
        this.taskInput.value = "";
        this.checkInput();
        removeButton.addEventListener('click', () =>{
          task.remove();
          removeButton.remove();
          taskCheckBox.remove();
        });

        taskCheckBox.addEventListener('change', () => {
          if(taskCheckBox.checked){
            task.classList.add("completed");
            
          }else{
            task.classList.remove("completed");
          }
        });
      }
    }

    checkInput() {
    if (this.taskInput.value !== '') {
      document.getElementById("addTaskBtn").style.display = "block";
    }else {
      document.getElementById("addTaskBtn").style.display = "none";
    }
  }
}
  // Usage
  const todoList = new ToDoList();