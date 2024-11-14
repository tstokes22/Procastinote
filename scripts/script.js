class ToDoList {
    constructor() {
      this.taskInput = document.getElementById("input");
      this.taskList = document.getElementById("taskList");
      this.bindEventListeners();
      this.addTask();
      this.checkInput();
      this.listLimit = 0;
    }
    

    bindEventListeners() {
      document.getElementById("addTaskBtn").addEventListener("click", () => {
        this.addTask();
      });

      this.taskInput.addEventListener("click", () => {
      });

      this.taskInput.addEventListener("input", () => {
        this.checkInput();
      });
      
    }
  
    addTask() {
      const taskName = this.taskInput.value.trim();
      if (taskName !== "" && this.listLimit < 18) {
        
        this.listLimit++;

        const task = document.createElement("li");
        this.taskList.appendChild(task);
        this.taskInput.value = "";
        this.checkInput();     

        //Task value
        const taskValue = document.createElement("input")
        taskValue.setAttribute("id", "task");
        

        //Checkbox for task
        const taskCheckBox = document.createElement("input");
        taskCheckBox.setAttribute("id", "taskCheckBox");
        taskCheckBox.type = "checkbox";
        

        //Set inner text of task element to the input value
        taskValue.value = taskName;

        //Delete Task button
        const removeButton = document.createElement("input");
        removeButton.type = "image";
        removeButton.src = "images/trash.svg";
        removeButton.setAttribute("id", "removeTaskButton");
        
        
        task.appendChild(taskCheckBox);
        task.appendChild(taskValue);
        task.appendChild(removeButton);
        

        removeButton.addEventListener('click', () =>{
          task.remove();
          removeButton.remove();
          taskCheckBox.remove();
          this.listLimit--;
        });
        

        taskCheckBox.addEventListener('change', () => {
          if(taskCheckBox.checked){
            taskValue.classList.add("completed");
            
          }else{
            taskValue.classList.remove("completed");
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