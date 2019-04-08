//Business logic

function TaskList() {
  this.todos = [];
  this.currentId = 0;
}

TaskList.prototype.addTodo = function(todo) {
  todo.id = this.assignId();
  this.todos.push(todo);
}

TaskList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

function ToDo(task) {
  this.task = task;
  this.status = "Incomplete";
}

ToDo.prototype.changeTodoStatus = function() {
  this.status = "complete";
}



//UI logic
