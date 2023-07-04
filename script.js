
window.addEventListener("load", function () {
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      var taskList = document.getElementById("taskList");
      taskList.innerHTML = savedTasks;
      addTaskClickListeners();
    }
  });
  
  function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value !== "") {
      var li = document.createElement("li");
      li.innerHTML = taskInput.value;
      li.onclick = function () {
        this.classList.toggle("completed");
        saveTasks();
      };
  
      var closeButton = document.createElement("span");
      closeButton.innerHTML = "x";
      closeButton.className = "close";
      closeButton.onclick = function (event) {
       // event.stopPropagation();
        this.parentNode.remove();
        saveTasks();
      };
  
      li.appendChild(closeButton);
      taskList.appendChild(li);
      taskInput.value = "";
  
      saveTasks();
    }
    else{
        alert("Add something");
    }
  }
  
  function saveTasks() {
    var taskList = document.getElementById("taskList");
    localStorage.setItem("tasks", taskList.innerHTML);
  }
  // Retrieve saved tasks from local storage on page load
window.addEventListener("load", function () {
    var savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      var taskList = document.getElementById("taskList");
      taskList.innerHTML = savedTasks;
      addTaskClickListeners();
    }
  });
  
  function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value !== "") {
      var li = document.createElement("li");
      li.innerHTML = taskInput.value;
      li.onclick = function () {
        this.classList.toggle("completed");
        saveTasks();
      };
  
      var closeButton = document.createElement("span");
      closeButton.innerHTML = "x";
      closeButton.className = "close";
      closeButton.onclick = function (event) {
        event.stopPropagation();
        this.parentNode.remove();
        saveTasks();
      };
  
      li.appendChild(closeButton);
      taskList.appendChild(li);
      taskInput.value = "";
  
      saveTasks();
    }
  }
  
  function saveTasks() {
    var taskList = document.getElementById("taskList");
    localStorage.setItem("tasks", taskList.innerHTML);
  }
  
  function addTaskClickListeners() {
    var tasks = document.querySelectorAll("#taskList li");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
        saveTasks();
      };
  
      var closeButton = tasks[i].querySelector(".close");
      closeButton.onclick = function (event) {
       // event.stopPropagation();
        this.parentNode.remove();
        saveTasks();
      };
    }
  }
  
  